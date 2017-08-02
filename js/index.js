$(document).ready(function() {
    $('.search').click(function() {
        $('.searchbox').show('slow');
    });
    $('#close-btn').click(function() {
        $('.searchbox').hide('slow');
    });
    $('.boxf ul li .boxmain').each(function(index) {
        $(this).mouseover(function() {
            $('.boxslist').eq(index).show();
        }).mouseout(function() {
            $('.boxslist').eq(index).hide();
        });
    });
    $('.list-icon').click(function() {
        $('.mainright .rightcontent').addClass('lesson-list2').removeClass('rightcontent');
        $('.lesson-list2 .lesson-infor p').css({
            'height': '36px',
            'display': 'block'
        });
        $('.lesson-list2 .zhongji').css({
            'display': 'block'
        });
        $('.lesson-list2 .learn-number').css({
            'display': 'block'
        });
        $('.lesson-list2 .conbox').each(function(index) {
            $(this).mouseover(function() {
                $('.lesson-list2 .conbox .lessonplay').eq(index).css({
                    'opacity': '1'
                });
            }).mouseout(function() {
                $('.lesson-list2 .conbox .lessonplay').eq(index).css({
                    'opacity': '0'
                });
            });
        });
    });

    $('.kuai-icon').click(function() {
        $('.mainright .lesson-list2').addClass('rightcontent').removeClass('lesson-list2');
        $('.rightcontent .lesson-infor p').css({
            'height': '0',
            'opacity': '0',
            'display': 'none'
        });
        $('.rightcontent .zhongji').css({
            'display': 'none'
        });
        $('.rightcontent .learn-number').css({
            'display': 'none'
        });
    });

    $('.rightcontent .conbox').each(function(index) {
        $(this).mouseover(function() {
            $('.rightcontent .conbox .lesson-infor p').eq(index).css({
                'height': '52px',
                'opacity': '1',
                'display': 'block'
            });
            $('.rightcontent .conbox .lesson-infor').eq(index).css({
                'height': '175px'
            }).addClass('lesson-hover');
            $('.rightcontent  .zhongji').eq(index).css({
                'display': 'block'
            });
            $('.rightcontent .learn-number').eq(index).css({
                'display': 'block'
            });
            $('.rightcontent  .lessonplay').eq(index).css({
                'opacity': '1'
            });
            $('.rightcontent .lessonicon-box').eq(index).css({
                'bottom': '-4px'
            });
        }).mouseout(function() {
            $('.rightcontent .conbox .lesson-infor').eq(index).css({
                'height': '88px'
            }).removeClass('lesson-hover');
            $('.rightcontent .conbox .lesson-infor p').eq(index).css({
                'height': '0',
                'opacity': '0',
                'display': 'none'
            });
            $('.rightcontent  .zhongji').eq(index).css({
                'display': 'none'
            });
            $('.rightcontent .learn-number').eq(index).css({
                'display': 'none'
            });
            $('.rightcontent  .lessonplay').eq(index).css({
                'opacity': '0'
            });
            $('.rightcontent .lessonicon-box').eq(index).css({
                'bottom': '4px'
            });
        });
    });
    $('.pages li').each(function(index) {
        $('.page-number').click(function(){
        	$(this).addClass('pgCurrent').siblings().removeClass('pgCurrent');
        	if(index==2){
        		$('.pages li').addClass('pgEmpty')
        	}else{
        		$('.pages li').removeClass('pgEmpty')
        	}       	
        });
            	
    })
    $('.group-top ').click(function(){
        $('html body').scrollTop(0);
    })
});
