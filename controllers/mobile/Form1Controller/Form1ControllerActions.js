define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    AS_Form_f71476422dc64e479d9e36684276516e: function AS_Form_f71476422dc64e479d9e36684276516e(eventobject) {
        var self = this;

        function MOVE_ACTION____b7be664354f3403fa780fc7cc952d9ed_Callback() {}
        self.view.Label0c369719a15ce4e.animate(
        kony.ui.createAnimation({
            "100": {
                "centerY": "-30%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "rectified": true
            }
        }), {
            "delay": 0,
            "iterationCount": "0",
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0
        }, {
            "animationEnd": MOVE_ACTION____b7be664354f3403fa780fc7cc952d9ed_Callback
        });
    },
    AS_Button_c6c19a4729dd4457b7793767836cd2a9: function AS_Button_c6c19a4729dd4457b7793767836cd2a9(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Form2");
        ntf.navigate();
    },
    AS_Button_ed43231357cd4476ac45fda8122601c8: function AS_Button_ed43231357cd4476ac45fda8122601c8(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Form3");
        ntf.navigate();
    }
});