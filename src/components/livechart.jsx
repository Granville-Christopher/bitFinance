// "use client"

// // TradingViewWidget.jsx
// import React, { useEffect, useRef, memo } from 'react';

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "symbols": [
//             [
//               "BINANCE:BTCUSD|ALL"
//             ],
//             [
//               "BINANCE:ETHUSD|ALL"
//             ],
//             [
//               "TSX:XAU|ALL"
//             ]
//           ],
//           "chartOnly": false,
//           "width": 1000,
//           "height": 500,
//           "locale": "en",
//           "colorTheme": "dark",
//           "autosize": false,
//           "showVolume": false,
//           "showMA": false,
//           "hideDateRanges": false,
//           "hideMarketStatus": false,
//           "hideSymbolLogo": false,
//           "scalePosition": "right",
//           "scaleMode": "Normal",
//           "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
//           "fontSize": "10",
//           "noTimeScale": false,
//           "valuesTracking": "1",
//           "changeMode": "price-and-percent",
//           "chartType": "area",
//           "maLineColor": "#2962FF",
//           "maLineWidth": 1,
//           "maLength": 9,
//           "lineWidth": 2,
//           "lineType": 0,
//           "dateRanges": [
//             "1d|1",
//             "1m|30",
//             "3m|60",
//             "12m|1D",
//             "60m|1W",
//             "all|1M"
//           ]
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container__widget" >
//       <div className="tradingview-widget-container pb=[100px]]" ref={container}>
      
        

//       </div>
//     </div>
//   );
// }

// export default memo(TradingViewWidget);
