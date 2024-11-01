<?php
class YAPEVENTS_Admin {
	public static function menus(){
		$page = add_options_page('Yapsody Events Calendar', 'Yapsody Events Calendar', 'manage_options', 'yapsody-events-calendar', array('YAPEVENTS_Admin','admin_options'));
		wp_enqueue_style('yapsody-events-calendar', plugins_url('includes/css/admin.css',__FILE__));
		wp_enqueue_script( 'wp-color-picker' );
	}


	public static function admin_options(){

		$available_views = apply_filters('yapevents_available_views',array('month'=>'Month','basicWeek'=>'Week (basic)','basicDay'=>'Day (basic)','agendaWeek'=>'Week (agenda)','agendaDay'=>'Day (agenda)'));

		$available_themes = apply_filters('yapevents_available_themes',array('black-tie'=>'Black Tie','blitzer'=>'Blitzer','cupertino' =>'Cupertino','dark-hive'=>'Dark Hive','dot-luv'=>'Dot Luv','eggplant'=>'Eggplant','excite-bike'=>'Excite Bike','flick'=>'Flick','hot-sneaks'=>'Hot Sneaks','humanity'=>'Humanity','le-frog'=>'Le Frog','mint-choc'=>'Mint Choc','overcast'=>'Overcast','pepper-grinder'=>'Pepper Grinder','redmond'=>'Redmond','smoothness'=>'Smoothness','south-street'=>'South Street','start'=>'Start','sunny'=>'Sunny','swanky-purse'=>'Swanky Purse','trontastic'=>'Trontastic','ui-darkness'=>'UI Darkness','ui-lightness'=>'UI Lightness','vader'=>'Vader','yapsody'=>'Yapsody'));

		//$event_borderColor = apply_filters('yapevents_eventBorderColor', get_option("yapevents_eventBorderColor","#000"));

		if( !empty($_REQUEST['_wpnonce']) && wp_verify_nonce($_REQUEST['_wpnonce'], 'yapevents_options_save')){


			foreach($_REQUEST as $option_name => $option_value){


				if(substr($option_name, 0, 10) == 'yapevents_'){
					
					$new_option_value = '';

					switch ($option_name) {
						
						case 'yapevents_eventTextColor':
						case 'yapevents_eventColor':
							$new_option_value = sanitize_hex_color($option_value);
							break;
						case 'yapevents_available_views':
							if (array_intersect($option_value, array_keys($available_views) ) ) {
								$new_option_value = $option_value;

							}
							break;
						case 'yapevents_defaultView':
							if (in_array( $option_value, array_keys($available_views) )) {
								$new_option_value = sanitize_text_field( $option_value );
							}
							break;
						case 'yapevents_venueShowImages':
						case 'yapevents_qtips_rounded':
						case 'yapevents_venueShowTooltip':								
							if ( in_array( $option_value, array('0','1')) ) {
								$new_option_value = sanitize_text_field( $option_value );
							}
							break;
						case 'yapevents_theme_css':								
							if ( in_array( $option_value, array_keys($available_themes) ) ) {
								$new_option_value = sanitize_text_field( $option_value );
							}
							break;
						case 'yapevents_venue_id':
							//yapevents_venue_id
							$new_option_value = str_replace('.yapsody.com', '', sanitize_text_field( $option_value ));
							break;
						default:
							$new_option_value = sanitize_text_field( $option_value );
							break;
					}

					if ($new_option_value !== '') {
						update_option( $option_name, $new_option_value );
					}
				}
			}
			echo '<div class="updated notice"><p>'.__('Settings saved.').'</p></div>';

		}
		?>
		<script type="text/javascript">
			jQuery(document).ready(function($){
			    $('.my-color-field').wpColorPicker();
			});
		</script>
		<div class="wrap">
			<h2>Yapsody Events Calendar</h2>
			<div id="poststuff" class="metabox-holder has-right-sidebar">
				<!--
				<div id="side-info-column" class="inner-sidebar">
					<div id="categorydiv" class="postbox ">
						<div class="handlediv" title="Click to toggle"></div>
						<h3 class="hndle" style="color:green;">** Support this plugin! **</h3>
						<div class="inside">
							<p>This plugin was developed by <a href="http://yapsody.com/">Aniket Belwalkar</a> and is now provided free of charge thanks to proceeds from the <a href="https://yapsody.com/">Yapsody</a>.</p>
							<p>We're not asking for donations, but we'd appreciate a 5* rating and/or a link to our plugin page!</p>
							<ul>
								<li><a href="https://wordpress.org/plugins/yapsody-events-calendar/" >Give us 5 Stars on WordPress.org</a></li>
								<li><a href="https://wordpress.org/plugins/yapsody-events-calendar/" >Link to our plugin page.</a></li>
							</ul>
						</div>
					</div>
					<div id="categorydiv" class="postbox ">
						<div class="handlediv" title="Click to toggle"></div>
						<h3 class="hndle">About FullCalendar</h3>
						<div class="inside">
							<p><a href="http://arshaw.com/fullcalendar/">FullCalendar</a> is a jQuery plugin developed by Adam Shaw, which adds a beautiful AJAX-enabled calendar which can communicate with your blog.</p> 
							<p>If you find this calendar particularly useful and can spare a few bucks, please <a href="http://arshaw.com/fullcalendar/">donate something to his project</a>, most of the hard work here was done by him and he gives this out freely for everyone to use!</p>
						</div>
					</div>
					<div id="categorydiv" class="postbox ">
						<div class="handlediv" title="Click to toggle"></div>
						<h3 class="hndle">Getting Help</h3>
						<div class="inside">
							<p>Before asking for help, check the readme files or the plugin pages for answers to common issues.</p>
							<p>If you're still stuck, try the <a href="http://wordpress.org/support/plugin/yapsody-events-calendar/">community forums</a>.</p>
						</div>
					</div>
					<div id="categorydiv" class="postbox ">
						<div class="handlediv" title="Click to toggle"></div>
						<h3 class="hndle">Translating</h3>
						<div class="inside">
							<p>If you'd like to translate this plugin, the language files are in the langs folder.</p>
							<p>Please email any translations to wp.plugins@netweblogic.com and we'll incorporate it into the plugin.</p>
						</div>
					</div>
				</div>
				-->
				
				<?php 

					$yapevents_available_views = get_option('yapevents_available_views', array('month','basicWeek','basicDay'));
					

					$event_color = apply_filters('yapevents_eventColor', get_option("yapevents_eventColor","#a8d144"));

					$event_textColor = apply_filters('yapevents_eventTextColor', get_option("yapevents_eventTextColor","#000"));

				?>
				<div id="post-body">
					<div id="post-body-content">
						<p>
							<?php echo sprintf(__('To use this plugin, simply use the %s shortcode in one of your posts or pages.','yapsody-events-calendar'),'<code>[yapsodyevents]</code>'); ?>
							
						</p>
						<form action="options-general.php?page=yapsody-events-calendar" class="yapevents-options" method="POST">
							<table class='form-table'>
								<?php 

								yapevents_options_input_text ( __( 'Yapsody Venue Subdomain', 'yapsody-events-calendar'), 'yapevents_venue_id', sprintf(__('Its your subdomain : [subdomain].yapsody.com','yapsody-events-calendar')), 'yapsody' );
								?>

								<tr>
									<th scope="row"><?php _e('Available Views','yapsody-events-calendar'); ?></th>
									<td>
										<?php foreach( $available_views as $view_key => $view_value ): ?>
										<input type="checkbox" name="yapevents_available_views[]" value="<?php echo $view_key ?>" <?php if( in_array($view_key, $yapevents_available_views	) ){ echo 'checked="checked"'; } ?>/> <?php echo $view_value; ?><br />
										<?php endforeach; ?>
										<em><?php _e('Users will be able to select from these views when viewing the calendar.'); ?></em>
									</td>
								</tr>
								<?php

								yapevents_options_select( __('Default View','yapsody-events-calendar'), 'yapevents_defaultView', $available_views, __('Choose the default view to be displayed when the calendar is first shown.','yapsody-events-calendar') );
								
								yapevents_options_input_text ( __( 'Time Format', 'yapsody-events-calendar'), 'yapevents_timeFormat', sprintf(__('Set the format used for showing the times on the calendar, <a href="%s">see possible combinations</a>. Leave blank for no time display.','yapsody-events-calendar'),'http://momentjs.com/docs/#/displaying/format/'), 'h(:mm)a' );
								
								yapevents_options_select( __('Calendar Theme','yapsody-events-calendar'), 'yapevents_theme_css', $available_themes, __('Choose the default theme to be displayed when the calendar is first shown.','yapsody-events-calendar') );

								yapevents_color_picker( __('Events Background Color','yapsody-events-calendar'), 'yapevents_eventColor', $event_color, __('<p><b>Note:</b> type="color" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.</p>','yapsody-events-calendar') );
								
								yapevents_color_picker( __('Events Text Color','yapsody-events-calendar'), 'yapevents_eventTextColor', $event_textColor, __('<p><b>Note:</b> type="color" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.</p>','yapsody-events-calendar') );

								yapevents_options_radio_binary( __('Show Event Tooltip','yapsody-events-calendar'), 'yapevents_venueShowTooltip', __('','yapsody-events-calendar') );

								yapevents_options_radio_binary( __('Make Event Tooltip Rounded','yapsody-events-calendar'), 'yapevents_qtips_rounded', __('','yapsody-events-calendar') );

								yapevents_options_radio_binary( __('Show Images on Event Tooltip','yapsody-events-calendar'), 'yapevents_venueShowImages', __('','yapsody-events-calendar') );
								
								//yapevents_color_picker( __('Events Border Color','yapsody-events-calendar'), 'yapevents_eventBorderColor', $event_borderColor, __('<p><b>Note:</b> type="color" is not supported in Internet Explorer 11 and earlier versions or Safari 9.1 and earlier versions.</p>','yapsody-events-calendar') );

								?>

							</table>
							<?php do_action('yapevents_admin_after_calendar_options'); ?>
							<table class='form-table'>
								<?php
								//jQuery UI ships with pre-made themes, so here they are. This was coded for packaged CSS Themes 1.10.4 and 1.11.4
								$jquery_themes = array('yapsody');
								$jquery_themes = apply_filters('yapevents_jquery_themes', $jquery_themes);
								//get custom theme CSS files
								$plugin_path = get_stylesheet_directory()."/plugins/yapsody-events-calendar/";
								foreach( glob( $plugin_path.'*.css') as $css_file ){
									$css_file = str_replace($plugin_path,'',$css_file);
									$css_custom_files[] = $css_file;
								}
								?>
							</table>
							<?php do_action('yapevents_admin_after_themeroller_options'); ?>
						    
							<?php do_action('yapevents_admin_after_tooltip_options'); ?>
							
							<?php do_action('yapevents_admin_after_optimizations'); ?>
							
							<input type="hidden" name="_wpnonce" value="<?php echo wp_create_nonce('yapevents_options_save'); ?>" />
							<p class="submit"><input type="submit" value="<?php _e('Submit Changes','yapsody-events-calendar'); ?>" class="button-primary"></p>
						</form>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}
//check for updates
if( version_compare(YAPEVENTS_VERSION, get_option('yapevents_version',0)) > 0 && current_user_can('activate_plugins') ){
	include('yapevents-install.php');
}

//add admin action hook
add_action ( 'admin_menu', array('YAPEVENTS_Admin', 'menus') );


/*
 * Admin UI Helpers
*/
function yapevents_options_input_text($title, $name, $description, $default='') {
	?>
	<tr valign="top" id='<?php echo esc_attr($name);?>_row'>
		<th scope="row"><?php echo esc_html($title); ?></th>
	    <td>
			<input name="<?php echo esc_attr($name) ?>" type="text" id="<?php echo esc_attr($title) ?>" style="width: 95%" value="<?php echo esc_attr(get_option($name, $default), ENT_QUOTES); ?>" size="45" /><br />
			<em><?php echo $description; ?></em>
		</td>
	</tr>
	<?php
}
function yapevents_options_input_password($title, $name, $description) {
	?>
	<tr valign="top" id='<?php echo esc_attr($name);?>_row'>
		<th scope="row"><?php echo esc_html($title); ?></th>
	    <td>
			<input name="<?php echo esc_attr($name) ?>" type="password" id="<?php echo esc_attr($title) ?>" style="width: 95%" value="<?php echo esc_attr(get_option($name)); ?>" size="45" /><br />
			<em><?php echo $description; ?></em>
		</td>
	</tr>
	<?php
}

function yapevents_options_textarea($title, $name, $description) {
	?>
	<tr valign="top" id='<?php echo esc_attr($name);?>_row'>
		<th scope="row"><?php echo esc_html($title); ?></th>
			<td>
				<textarea name="<?php echo esc_attr($name) ?>" id="<?php echo esc_attr($name) ?>" rows="6" cols="60"><?php echo esc_attr(get_option($name), ENT_QUOTES);?></textarea><br/>
				<em><?php echo $description; ?></em>
			</td>
		</tr>
	<?php
}

function yapevents_options_radio($name, $options, $title='') {
		$option = get_option($name);
		?>
	   	<tr valign="top" id='<?php echo esc_attr($name);?>_row'>
	   		<?php if( !empty($title) ): ?>
	   		<th scope="row"><?php  echo esc_html($title); ?></th>
	   		<td>
	   		<?php else: ?>
	   		<td colspan="2">
	   		<?php endif; ?>
	   			<table>
	   			<?php foreach($options as $value => $text): ?>
	   				<tr>
	   					<td><input id="<?php echo esc_attr($name) ?>_<?php echo esc_attr($value); ?>" name="<?php echo esc_attr($name) ?>" type="radio" value="<?php echo esc_attr($value); ?>" <?php if($option == $value) echo "checked='checked'"; ?> /></td>
	   					<td><?php echo $text ?></td>
	   				</tr>
				<?php endforeach; ?>
				</table>
			</td>
	   	</tr>
<?php
}

function yapevents_options_radio_binary($title, $name, $description, $option_names = '') {
	if( empty($option_names) ) {
		$option_names = array(0 => __('No','yapsody-events-calendar'), 1 => __('Yes','yapsody-events-calendar'));
	}
	
	$saved_option_value = get_option($name);
	
	?>
   	<tr valign="top" id='<?php echo $name;?>_row'>
   		<th scope="row"><?php echo esc_html($title); ?></th>
   		<td>
   			<?php echo $option_names[1]; ?> <input id="<?php echo esc_attr($name) ?>_yes" name="<?php echo esc_attr($name) ?>" type="radio" value="1" <?php if($saved_option_value) echo "checked='checked'"; ?> />&nbsp;&nbsp;&nbsp;
			<?php echo $option_names[0]; ?> <input  id="<?php echo esc_attr($name) ?>_no" name="<?php echo esc_attr($name) ?>" type="radio" value="0" <?php if(!$saved_option_value) echo "checked='checked'"; ?> />
			<br/><em><?php echo $description; ?></em>
		</td>
   	</tr>
	<?php
}

function yapevents_options_select($title, $name, $list, $description, $default='') {
	$option_value = get_option($name, $default);
	?>
   	<tr valign="top" id='<?php echo esc_attr($name);?>_row'>
   		<th scope="row"><?php echo esc_html($title); ?></th>
   		<td>
			<select name="<?php echo esc_attr($name); ?>" >
				<?php foreach($list as $key => $value) : ?>
 				<option value='<?php echo esc_attr($key) ?>' <?php echo ("$key" == $option_value) ? "selected='selected' " : ''; ?>>
 					<?php echo esc_html($value); ?>
 				</option>
				<?php endforeach; ?>
			</select> <br/>
			<em><?php echo $description; ?></em>
		</td>
   	</tr>
	<?php
}

function yapevents_color_picker($title, $name, $color, $description, $default='') {
	$option_value = get_option($name, $default);
	?>
   	<tr valign="top" id='<?php echo esc_attr($name);?>_row'>
   		<th scope="row"><?php echo esc_html($title); ?></th>
   		<td>
				<input type="text" name="<?php echo esc_attr($name); ?>" value="<?php echo esc_attr($color) ?>" class="my-color-field"/>
				<br/>
			<em><?php echo $description; ?></em>
		</td>
   	</tr>
	<?php
}
