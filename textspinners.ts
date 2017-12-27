namespace TextSpinner {

    export  enum SpinnerType {
        Quarter = 0,
        Semi,
        Outline,
        Bars,
    }

    export  class Spinner
    {
        k1 = [ '◷', '◶', '◵', '◴'];
        k2 = ['◓', '◑', '◒', '◐'];
        k3 = ['◝', '◞', '◟', '◜'];        
        k4 = ['▂', '▃', '▅', '▆', '▇'];

        constructor()
        {

        }

        animate(SpinnerType: SpinnerType, element: HTMLElement, time:number )
        {
            var a : any = {
                i : 0,
                arr : null,
                cancel : null
            };

            switch(SpinnerType)  
            {
                case TextSpinner.SpinnerType.Quarter: a.arr = this.k1; break;
                case TextSpinner.SpinnerType.Semi: a.arr = this.k2; break;
                case TextSpinner.SpinnerType.Outline: a.arr = this.k3; break;
                case TextSpinner.SpinnerType.Bars: a.arr = this.k4; break;
            }

            var c = setInterval(function() {
                a.i = (a.i + 1) % a.arr.length;
                element.innerText = a.arr[a.i];
            }, time);

            a.cancel = function()
            {
                element.innerText = '';
                clearInterval(c);
            }

            return a;
        }
    }
}