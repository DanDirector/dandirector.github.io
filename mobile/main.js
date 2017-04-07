'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(2)){break;} var source = arguments[i]; for (var key in source) {if (window.CP.shouldStopExecution(1)){break;} if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
window.CP.exitedLoop(1);
 }
window.CP.exitedLoop(2);
 return target; };

var app = document.getElementById('app');
var hearts = document.querySelectorAll('.fa-heart');

var hApp = new Hammer(app, {
  direction: Hammer.DIRECTION_ALL,
  threshold: 0
});

hApp.get('pan').set({ direction: Hammer.DIRECTION_ALL });

var pan$ = Rx.Observable.fromEventPattern(function (cb) {
  return hApp.on('panstart panend panup pandown', cb);
});

var initialState = {
  item: 0,
  y: 0,
  moving: false
};

var reducer = function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'panup':
    case 'pandown':
      return _extends({}, state, {
        y: action.deltaY,
        moving: true
      });

    case 'panend':
      {
        var newItem = action.deltaY > 100 ? Math.max(state.item - 1, 0) : action.deltaY < 100 ? Math.min(state.item + 1, 2) : state.item;

        return {
          y: 0,
          moving: false,
          item: newItem
        };
      }

    default:
      return state;
  }
};

var state$ = pan$.scan(reducer, initialState);

var style$ = RxCSS({ pan: state$ });

// Since you've scrolled this far down,
// here's an easter egg!

var colorPairs = [['#F82462', '#1D2063'], ['#24B8F8', '#24315A'], ['#FF5C43', '#343AA6'], ['#3EBB8C', '#FFD8C0']];

hearts.forEach(function (heart, i) {
  var _colorPairs$i = colorPairs[i];
  var primary = _colorPairs$i[0];
  var secondary = _colorPairs$i[1];

  heart.addEventListener('click', function () {
    RxCSS.styledash(document.documentElement).set({
      color: { primary: primary, secondary: secondary }
    });
  });
});
