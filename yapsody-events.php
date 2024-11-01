<?php
/*
Plugin Name: Yapsody Events Calendar
Version: 4.0
Plugin URI: https://wordpress.org/plugins/yapsody-events-calendar/
Description: Uses the jQuery FullCalendar plugin to create a stunning calendar view of your events from Yapsody
Author: Yapsody
Developer: Aniket Belwalkar, Yapsody
Author URI: https://www.yapsody.com
*/

/*
Copyright (c) 2021 Yapsody India Pvt Ltd

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

define('YAPEVENTS_VERSION', '1.0');
define('YAPEVENTS_UI_VERSION','1.11'); //jQuery 1.11.x

class Yapsody_Events{

	static $args = array();

	static $tip_styles = array('default','plain','light','dark','red','green','blue','youtube','jtools','cluetip','tipped','tipsy');

	static $tip_styles_css3 = array('shadow','rounded');

	static $tip_positions = array('top left', 'top right', 'top center', 'bottom left', 'bottom right', 'bottom center', 'right center', 'right top', 'right bottom', 'left center', 'left top', 'left bottom', 'center');

	public static function init() {

		add_action('network_admin_notices',array('Yapsody_Events','yapevents_curl_version_warning') );
		add_action('admin_notices', array('Yapsody_Events','yapevents_curl_version_warning') );

		if (function_exists( 'curl_version' )) {

			//Scripts
			if( !is_admin() ){ //show only in public area

				//shortcodes
				add_shortcode('yapsodyevents', array('Yapsody_Events','calendar'));

			    add_action('wp_enqueue_scripts',array('Yapsody_Events','enqueue_scripts'));
				
				add_shortcode('yapsody_events', array('Yapsody_Events','calendar')); //depreciated, will be gone by 1.0
			
			}else{
				//admin actions
				include('yapevents-admin.php');
			}

			add_action('wp_ajax_Yapsody_Events', array('Yapsody_Events','ajax') );
			add_action('wp_ajax_nopriv_Yapsody_Events', array('Yapsody_Events','ajax') );

			/*//base arguments
			self::$args['type'] = get_option('yapevents_default_type','event');*/
		}

	}


	public static function yapevents_curl_version_warning()
	{
		if (!function_exists( 'curl_version' )) {
			?>
				<div class="error"><p>PHP cURL is not installed or enabled on your server, this plugin will not do anything.</p><p>Please make sure you have the cURL installed and enabled on your server for Yapsody Events Calendar plugin to work properly. <em>Only admins see this message.</em></p></div>
			<?php
		}
	}
	
	public static function enqueue_scripts(){

	    $min = defined('WP_DEBUG') && WP_DEBUG ? '':'.min';

	    //Scripts
	    wp_enqueue_script('yapsody-events-calendar', plugins_url('includes/js/main.js',__FILE__), array('jquery', 'jquery-ui-core','jquery-ui-widget','jquery-ui-position', 'jquery-ui-selectmenu'), YAPEVENTS_VERSION); //jQuery will load as dependency
	    Yapsody_Events::localize_script();
	    //Styles
	    wp_enqueue_style('yapsody-events-calendar', plugins_url('includes/css/main.css',__FILE__), array(), YAPEVENTS_VERSION);
	    //Load custom style or jQuery UI Theme
	    $yapevents_theme = get_option('yapevents_theme_css');
	    if( preg_match('/\.css$/', $yapevents_theme) ){
	        //user-defined style within the themes/themename/plugins/yapsody-events-calendar/ folder
	        //if you're using jQuery UI Theme-Roller, you need to include the jquery-ui-css framework file too, you could do this using the @import CSS rule or include it all in your CSS file
	        if( file_exists(get_stylesheet_directory()."/plugins/yapsody-events-calendar/".$yapevents_theme) ){
	            $yapevents_theme_css = get_stylesheet_directory_uri()."/plugins/yapsody-events-calendar/".$yapevents_theme;
        	    wp_deregister_style('jquery-ui'); 
        	    wp_enqueue_style('jquery-ui', $yapevents_theme_css, array('yapsody-events-calendar'), YAPEVENTS_VERSION);
	        }
	    }elseif( !empty($yapevents_theme) ){
		    //We'll find the current jQuery UI version and attempt to load the right version of jQuery UI, otherwise we'll load the default. This allows backwards compatability from 3.6 onwards.
    	    global $wp_scripts;
    	    $jquery_ui_version = preg_replace('/\.[0-9]+$/', '', $wp_scripts->registered['jquery-ui-core']->ver);
    	    if( $jquery_ui_version != YAPEVENTS_UI_VERSION ){
        	    $jquery_ui_css_versions = glob( $plugin_path = plugin_dir_path(__FILE__)."/includes/css/jquery-ui-".$jquery_ui_version.'*', GLOB_ONLYDIR);
    		    if( !empty($jquery_ui_css_versions) ){
    		        //use backwards compatible theme
    		        $jquery_ui_css_folder = str_replace(plugin_dir_path(__FILE__),'', array_pop($jquery_ui_css_versions));
    		        $jquery_ui_css_uri = plugins_url(trailingslashit($jquery_ui_css_folder).$yapevents_theme."/jquery-ui$min.css",__FILE__);
    		        $yapevents_theme_css = plugins_url(trailingslashit($jquery_ui_css_folder).$yapevents_theme.'/theme.css',__FILE__);
    		    }
    	    }
    	    if( empty($yapevents_theme_css) ){
		        //use default theme
		        $jquery_ui_css_uri = plugins_url('/includes/css/jquery-ui/'.$yapevents_theme."/jquery-ui$min.css",__FILE__);
		        $yapevents_theme_css = plugins_url('/includes/css/jquery-ui/'.$yapevents_theme.'/theme.css',__FILE__);
		    }
        	if( !empty($yapevents_theme_css) ){   
        	    wp_deregister_style('jquery-ui'); 
        	    wp_enqueue_style('jquery-ui', $jquery_ui_css_uri, array('yapsody-events-calendar'), YAPEVENTS_VERSION);
        	    wp_enqueue_style('jquery-ui-theme', $yapevents_theme_css, array('yapsody-events-calendar'), YAPEVENTS_VERSION);
        	}
	    }
	}

	public static function localize_script(){
		$js_vars = array();
		$schema = is_ssl() ? 'https':'http';
		$js_vars['ajaxurl'] = admin_url('admin-ajax.php', $schema);
		$js_vars['plugins_url'] = plugin_dir_url(__FILE__);

		$js_vars['firstDay'] =  get_option('start_of_week');
		$js_vars['yapevents_theme'] = get_option('yapevents_theme_css') ? true:false;
		$js_vars['yapevents_limit'] = get_option('yapevents_limit',3);
		$js_vars['yapevents_limit_txt'] = get_option('yapevents_limit_txt','more ...');
		//FC options
		$js_vars['timeFormat'] = get_option('yapevents_timeFormat', 'h(:mm)t');
		$js_vars['defaultView'] = get_option('yapevents_defaultView', 'month');
		$js_vars['weekends'] = get_option('yapevents_weekends',true) ? 'true':'false';
		$js_vars['header'] = new stdClass();
		$js_vars['header']->left = 'prev,next today';
		$js_vars['header']->center = 'title';
		$js_vars['header']->right = implode(',', get_option('yapevents_available_views', array('month','basicWeek','basicDay')));
		$js_vars['header'] = apply_filters('yapevents_calendar_header_vars', $js_vars['header']); 
		//qtip options
    	$js_vars['yapevents_qtips'] = get_option('yapevents_qtips',true) == true;
		if( $js_vars['yapevents_qtips'] ){
    		$js_vars['yapevents_qtips_classes'] = 'ui-tooltip-'. get_option('yapevents_qtips_style','light');
    		$js_vars['yapevents_qtips_my'] = get_option('yapevents_qtips_my','top center');
    		$js_vars['yapevents_qtips_at'] = get_option('yapevents_qtips_at','bottom center');
    		if( get_option('yapevents_qtips_rounded', 0) ){
    			$js_vars['yapevents_qtips_classes'] .= " ui-tooltip-rounded";
    		}
    		if( get_option('yapevents_qtips_shadow', true) ){
    			$js_vars['yapevents_qtips_classes'] .= " ui-tooltip-shadow";
    		}
		}

		$js_vars['yapevents_show_tooltip'] = get_option('yapevents_venueShowTooltip');

	    $js_vars['yapevents_show_images'] = get_option('yapevents_venueShowImages');

	    $js_vars['yapevents_eventColor'] = get_option('yapevents_eventColor', "#a8d144");

	    $js_vars['yapevents_eventTextColor'] = get_option('yapevents_eventTextColor', "#000");

	    //$js_vars['yapevents_eventBorderColor'] = get_option('yapevents_eventBorderColor', "#000");
	    
		//calendar translations
		wp_localize_script('yapsody-events-calendar', 'YAPEVENTS', apply_filters('yapevents_js_vars', $js_vars));
	}

	// refering help from comments in http://php.net/manual/en/function.checkdate.php
	public static function validateDate($date, $format = 'Y-m-d H:i:s')
	{
	    $d = DateTime::createFromFormat($format, $date);
	    return $d && $d->format($format) == $date;
	}

	/**
	 * Catches ajax requests by fullcalendar
	 */
	public static function ajax(){

	    //sort out args
	    unset($_REQUEST['month']); //no need for these two
	    unset($_REQUEST['year']);

	    // Process the request if and only both the start and the end date are in proper format. If not then do not perform any operations.
		if ( self::validateDate( $_REQUEST['start'], 'Y-m-d' ) && self::validateDate( $_REQUEST['end'], 'Y-m-d' ) ) {

		    //maybe excessive, but easy sanitization of start/end query params
		    $startDate = date('Y-m-d', strtotime( $_REQUEST['start'] ) );
		    $endDate = date('Y-m-d', strtotime( $_REQUEST['end'] ) );

		    $postdata['vals']['type'] = 'period';
		    $postdata['vals']['start'] = $startDate;
		    $postdata['vals']['end'] = $endDate;

		    $venue_code = get_option('yapevents_venue_id');
		   // $show_images = get_option('yapevents_venueShowImages');

			$headers = array('cache-control' => 'no-cache', 'venue-code' => $venue_code, 'Content-Type' => 'application/json');
			$url = "https://api.yapsody.com/online/performances?start_date=".$postdata['vals']['start']."%2000%3A00%3A00&end_date=".$postdata['vals']['end']."%2000%3A00%3A00";
			$request = new WP_Http();
			$result = $request->get($url, array('timeout' => 30, 'headers' => $headers, 'sslverify' => true));


		    if( isset($result['response']['code']) && $result['response']['code'] == 200 ) {

		   		$response = json_decode($result['body'], true);
		        foreach ($response['data']['performances'] as $key => $value) {
		        	$newItem[$key]['title'] = $value['event_title1'];
		        	$newItem[$key]['start'] = date('Y-m-d\TH:i:s', strtotime($value['show_start_datetime']));
		        	$newItem[$key]['end'] = date('Y-m-d\TH:i:s', strtotime($value['show_end_datetime']));
		        	//$newItem[$key]['color'] = $eventColor; //#a8d144';
		        	// $newItem[$key]['url'] = $value['performance_url'];
		        	// $newItem[$key]['url'] = 'https://'.$venue_code.'.yapsody.com/event/book/'.$value['show_id'].'/'.$value['id'];
		        	$newItem[$key]['url'] = 'https://'.$venue_code.'.yapsody.com/event/index/'.$value['show_id'].'/';
		        	//if(!empty($show_images) && $show_images == 1){
		        		$newItem[$key]['image'] = $value['thumb_image'];	
		        	//}
		        	$newItem[$key]['post_id'] = 0;
		        }
			} else {
				echo "API Operation failed";
		    }

	    } else {
	    	echo "Invalid Date";
	    }

	    echo json_encode(apply_filters('yapevents_ajax', $newItem));
	    die(); //normally we'd wp_reset_postdata();
	}
	
	/**
	 * Returns the calendar HTML setup and primes the js to load at wp_footer
	 * @param array $args
	 * @return string
	 */
	public static function calendar( $args = array() ){
		if (is_array($args) ) self::$args = array_merge(self::$args, $args);
		self::$args['month'] = (!empty($args['month'])) ? $args['month']-1:date('m', current_time('timestamp'))-1;
		self::$args['year'] = (!empty($args['year'])) ? $args['year']:date('Y', current_time('timestamp'));
		self::$args = apply_filters('yapevents_fullcalendar_args', self::$args);
		add_action('wp_footer', array('Yapsody_Events','footer_js'));
		ob_start();
		?>
		<div class="yapevents-calendar-wrapper"><form class="yapevents-calendar"></form><div class="yapevents-loading"></div></div>
		<script type="text/javascript">
    		YAPEVENTS.data = { action : 'Yapsody_Events'<?php
    				//these arguments were assigned earlier on when displaying the calendar, and remain constant between ajax calls
    				if(!empty(self::$args)){ echo ", "; }
    				$strings = array(); 
    				foreach( self::$args as $key => $arg ){
    					$arg = is_numeric($arg) ? (int) $arg : "'$arg'"; 
    					$strings[] = "'$key'" ." : ". $arg ; 
    				}
    				echo implode(", ", $strings);
    		?> };
    		YAPEVENTS.month = <?php echo self::$args['month']; ?>;
    		YAPEVENTS.year = <?php echo self::$args['year']; ?>;
		</script>
		<?php
		do_action('yapevents_calendar_displayed', $args);
		return ob_get_clean();
	}

	/**
	 * Run at wp_footer if a calendar is output earlier on in the page.
	 * @uses self::$args - which was modified during self::calendar()
	 */
	public static function footer_js(){
		?>
		<script type='text/javascript'>
		<?php 
		  include('includes/js/inline.js');
		  $locale_code = strtolower(str_replace('_','-', get_locale()));
		  $file_long = dirname(__FILE__).'/includes/js/lang/'.$locale_code.'.js';
		  $file_short = dirname(__FILE__).'/includes/js/lang/'.substr ( $locale_code, 0, 2 ).'.js';
		  if( file_exists($file_short) ){
		      include_once($file_short);
		  }elseif( file_exists($file_long) ){
		      include_once($file_long);
		  }
		?>
		</script>
		<?php
	}
}
add_action('plugins_loaded',array('Yapsody_Events','init'), 100);

// action links
add_filter('plugin_action_links_'.plugin_basename(__FILE__), 'yapevents_settings_link', 10, 1);
function yapevents_settings_link($links) {
	$new_links = array(); //put settings first
	$new_links[] = '<a href="'.admin_url('options-general.php?page=yapsody-events-calendar').'">'.__('Settings', 'yapsody-events-calendar').'</a>';
	return array_merge($new_links,$links);
}

//translations
load_plugin_textdomain('yapsody-events-calendar', false, dirname( plugin_basename( __FILE__ ) ).'/includes/langs');
