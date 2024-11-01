var yapevents_loaded = false;
var yapevents_counts = {};
jQuery(document).ready( function($){	
	var fullcalendar_args = {
		timeFormat: YAPEVENTS.timeFormat,
		defaultView: YAPEVENTS.defaultView,
		weekends: YAPEVENTS.weekends,
		header: {
			left: YAPEVENTS.header.left,
			center: YAPEVENTS.header.center,
			right: YAPEVENTS.header.right
		},
		month: YAPEVENTS.month,
		year: YAPEVENTS.year,
		theme: YAPEVENTS.yapevents_theme,
		firstDay: YAPEVENTS.firstDay,
		editable: false,
		eventSources: [{
				url : YAPEVENTS.ajaxurl,
				data : YAPEVENTS.data,
				ignoreTimezone: true,
				allDayDefault: false
		}],
		eventBackgroundColor: YAPEVENTS.yapevents_eventColor,
		eventTextColor: YAPEVENTS.yapevents_eventTextColor,
		/*eventColor: '#FFF',*//*YAPEVENTS.yapevents_eventColor,*/
		/*eventBorderColor: YAPEVENTS.yapevents_eventBorderColor,*/
		theme: true,
		themeSystem: "bootstrap3",
	    eventRender: function(event, element) {
	    	if (YAPEVENTS.yapevents_show_tooltip == '1') {

	    		var image_html = '';
	    		if (YAPEVENTS.yapevents_show_images == '1') {
	    			image_html = '<div style="background: url('+ YAPEVENTS.plugins_url +'includes/images/loading.gif) no-repeat center center;"><div style="display:block;min-height:6em;background: url('+ event.image +') no-repeat;background-size: 100% 100%;"></div></div>';
	    		}
			//if( event.post_id > 0 && YAPEVENTS.yapevents_qtips == 1 ){
				element.qtip({
					content: '<div class="fc-tooltip" style="text-align:center;">' + image_html + '<p class="fc-title"><b>' + event.title + '</b></p></div>',
					position : {
						my: YAPEVENTS.yapevents_qtips_my,
						at: YAPEVENTS.yapevents_qtips_at
					},
					style : { classes:YAPEVENTS.yapevents_qtips_classes, width: '190px' }
				});
			//}
			}
	    },
		loading: function(bool) {
			if (bool) {
				$(this).parent().find('.yapevents-loading').show();
			}else {
				$(this).parent().find('.yapevents-loading').hide();
			}
		},
		viewRender: function(view, element) {
			if( !yapevents_loaded ){
				var container = $(element).parents('.yapevents-calendar-wrapper');
				container.find('.fc-toolbar').after(container.next('.yapevents-calendar-search').show());
				//catchall selectmenu handle
			    /*$.widget( "custom.yapevents_selectmenu", $.ui.selectmenu, {
			        _renderItem: function( ul, item ) {
			        	var li = $( "<li>", { html: item.label.replace(/#([a-zA-Z0-9]{3}[a-zA-Z0-9]{3}?) - /g, '<span class="yapevents-cat-icon" style="background-color:#$1"></span>') } );
			        	if ( item.disabled ) {
			        		li.addClass( "ui-state-disabled" );
			        	}
			        	return li.appendTo( ul );
			        }
			    });
				$('select.yapevents-taxonomy').yapevents_selectmenu({
					format: function(text){
						//replace the color hexes with color boxes
						return text.replace(/#([a-zA-Z0-9]{3}[a-zA-Z0-9]{3}?) - /g, '<span class="yapevents-cat-icon" style="background-color:#$1"></span>');
					},
					select: function( event, ui ){
						var calendar = $('.yapevents-calendar');
						menu_name = $(this).attr('name');
						$( '#' + menu_name + '-button .ui-selectmenu-text' ).html( ui.item.label.replace(/#([a-zA-Z0-9]{3}[a-zA-Z0-9]{3}?) - /g, '<span class="yapevents-cat-icon" style="background-color:#$1"></span>') );
						YAPEVENTS.data[menu_name] = ui.item.value;
						calendar.fullCalendar('removeEventSource', YAPEVENTS.ajaxurl);
						calendar.fullCalendar('addEventSource', {url : YAPEVENTS.ajaxurl, allDayDefault:false, ignoreTimezone: true, data : YAPEVENTS.data});
					}
				})*/
			}
			yapevents_loaded = true;
	    }
	};
	if( YAPEVENTS.yapevents_locale ){
		$.extend(fullcalendar_args, YAPEVENTS.yapevents_locale);
	}
	$(document).trigger('yapevents_fullcalendar_args', [fullcalendar_args]);
	$('.yapevents-calendar').first().fullCalendar(fullcalendar_args);
});
