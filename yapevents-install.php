<?php
//if called, assume we're installing/updated
add_option('yapevents_theme',1);
add_option('yapevents_theme_css', 'ui-lightness');
add_option('yapevents_limit',3);
add_option('yapevents_limit_txt','more ...');
add_option('yapevents_qtips',true);
add_option('yapevents_qtips_style','light');
add_option('yapevents_qtips_my','top center');
add_option('yapevents_qtips_at','bottom center');
add_option('yapevents_qtips_rounded', 0);
add_option('yapevents_qtips_image',1);
//add_option('yapevents_qtips_image_w',75);
//add_option('yapevents_qtips_image_h',75);
add_option('yapevents_timeFormat', 'h(:mm)A');
add_option('yapevents_defaultView', 'month');
add_option('yapevents_available_views', array('month','basicWeek','basicDay'));

//make a change to the theme
if( version_compare( get_option('yapevents_version'), '1.0') ){
    $yapevents_theme_css = get_option('yapevents_theme_css');
    //replace CSS theme value for new method
    $yapevents_theme_css = str_replace( plugins_url('includes/css/ui-themes/',__FILE__), '', $yapevents_theme_css);
    if( $yapevents_theme_css !== get_option('yapevents_theme_css') ){
        //it uses jQuery UI CSS, so remove trailing .css from value
        $yapevents_theme_css = str_replace('.css','', $yapevents_theme_css);
    }else{
        //replace custom CSS value
        $yapevents_theme_css = str_replace( get_stylesheet_directory_uri()."/plugins/yapsody-events-calendar/", '', $yapevents_theme_css);
    }
    update_option('yapevents_theme_css', $yapevents_theme_css);
}

//update version
update_option('yapevents_version', YAPEVENTS_VERSION);