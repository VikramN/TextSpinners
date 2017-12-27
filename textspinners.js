var TextSpinner;
(function (TextSpinner) {
    var SpinnerType;
    (function (SpinnerType) {
        SpinnerType[SpinnerType["Quarter"] = 0] = "Quarter";
        SpinnerType[SpinnerType["Semi"] = 1] = "Semi";
        SpinnerType[SpinnerType["Outline"] = 2] = "Outline";
        SpinnerType[SpinnerType["Bars"] = 3] = "Bars";
    })(SpinnerType = TextSpinner.SpinnerType || (TextSpinner.SpinnerType = {}));
    var Spinner = /** @class */ (function () {
        function Spinner() {
            this.k1 = ['◷', '◶', '◵', '◴'];
            this.k2 = ['◓', '◑', '◒', '◐'];
            this.k3 = ['◝', '◞', '◟', '◜'];
            // k4 = ['▁', '▂', '▃', '▅', '▆', '▇'];
            this.k4 = ['▂', '▃', '▅', '▆', '▇'];
        }
        Spinner.prototype.animate = function (SpinnerType, element, time) {
            var a = {
                i: 0,
                arr: null,
                cancel: null
            };
            switch (SpinnerType) {
                case TextSpinner.SpinnerType.Quarter:
                    a.arr = this.k1;
                    break;
                case TextSpinner.SpinnerType.Semi:
                    a.arr = this.k2;
                    break;
                case TextSpinner.SpinnerType.Outline:
                    a.arr = this.k3;
                    break;
                case TextSpinner.SpinnerType.Bars:
                    a.arr = this.k4;
                    break;
            }
            var c = setInterval(function () {
                a.i = (a.i + 1) % a.arr.length;
                element.innerText = a.arr[a.i];
            }, time);
            a.cancel = function () {
                element.innerText = '';
                clearInterval(c);
            };
            return a;
        };
        return Spinner;
    }());
    TextSpinner.Spinner = Spinner;
})(TextSpinner || (TextSpinner = {}));
//# sourceMappingURL=textspinners.js.map