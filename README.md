# TextSpinners
HTML Unicode Text Spinners

## Demo
![Demo Gif](https://raw.githubusercontent.com/VikramN/TextSpinners/master/demo.gif)

## Code Sample

```html
<head>
    <meta charset="utf-8">
    <script src="textspinners.js"></script>     
</head>
```

```javascript

// Show spinner
var temp  = new TextSpinner.Spinner().animate(
  TextSpinner.SpinnerType.Quarter, // Spinner type (see below)
  document.getElementById('pg1'),  // HMTL element (inner text will be replaced)
  200);                            // Frame interval in ms
};

// Close spinner
temp.cancel();

// Spinner Types
TextSpinner.SpinnerType.Quarter
TextSpinner.SpinnerType.Semi
TextSpinner.SpinnerType.Outline
TextSpinner.SpinnerType.Bars

```




