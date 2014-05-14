$(function() {
	var rows = $('.b-feedback-list .b-feedback-row:not(.b-feedback-row-active)');
	rows.find('.b-title').click(function() {
		var self = $(this);
		var p = self.parents(".b-feedback-row:first");

		var n = self.find(".get-new");
		if (n.length) {
			n.remove();
			var sId = p.attr('class').match(/b-feedback-row-id-([0-9]+)/i);
			if (sId && sId.length == 2) {
				$.ajax({url: '/feedbackread.php', data: {'tid': sId[1]}});
			}
		}
		if (p.hasClass("b-feedback-row-active")) {
			p.removeClass("b-feedback-row-active");
		} else {
			p.addClass("b-feedback-row-active");
		}
		
		return false;
	});
	
	rows.find('.b-delete').click(function() {
		if (confirm("РЈРІРµСЂРµРЅС‹, С‡С‚Рѕ С…РѕС‚РёС‚Рµ СѓРґР°Р»РёС‚СЊ РІС‹Р±СЂР°РЅРЅС‹Р№ С‚РёРєРµС‚?")) {
			location.replace($(this).attr('href'));
		}
		return false;
	});
	
	rows.find('.b-status').click(function() {
		if (confirm("РЈРІРµСЂРµРЅС‹, С‡С‚Рѕ С…РѕС‚РёС‚Рµ РёР·РјРµРЅРёС‚СЊ СЃС‚Р°С‚СѓСЃ РІС‹Р±СЂР°РЅРЅРѕРіРѕ С‚РёРєРµС‚Р°?")) {
			location.replace($(this).attr('href'));
		}
		return false;
	});
});