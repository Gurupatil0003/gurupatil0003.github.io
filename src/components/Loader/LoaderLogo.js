import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="40%"
        viewBox="0 0 440 305"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: `

      .signature1{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 0.5s;
			-o-animation: dash 1s linear forwards 0.5s;
			-moz-animation: dash 1s linear forwards 0.5s;
			animation: dash 1s linear forwards 0.5s;
		}
		.signature2{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 0.7s;
			-o-animation: dash 1s linear forwards 0.7s;
			-moz-animation: dash 1s linear forwards 0.7s;
			animation: dash 1s linear forwards 0.7s;
		}
		.signature3{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 0.9s;
			-o-animation: dash 1s linear forwards 0.9s;
			-moz-animation: dash 1s linear forwards 0.9s;
			animation: dash 1s linear forwards 0.9s;
		}
		.signature4{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.1s;
			-o-animation: dash 1s linear forwards 1.1s;
			-moz-animation: dash 1s linear forwards 1.1s;
			animation: dash 1s linear forwards 1.1s;
		}
		.signature5{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.3s;
			-o-animation: dash 1s linear forwards 1.3s;
			-moz-animation: dash 1s linear forwards 1.3s;
			animation: dash 1s linear forwards 1.3s;
		}
		.signature6{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.5s;
			-o-animation: dash 1s linear forwards 1.5s;
			-moz-animation: dash 1s linear forwards 1.5s;
			animation: dash 1s linear forwards 1.5s;
		}
		.signature7{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.7s;
			-o-animation: dash 1s linear forwards 1.7s;
			-moz-animation: dash 1s linear forwards 1.7s;
			animation: dash 1s linear forwards 1.7s;
		}
		.signature8{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 1.9s;
			-o-animation: dash 1s linear forwards 1.9s;
			-moz-animation: dash 1s linear forwards 1.9s;
			animation: dash 1s linear forwards 1.9s;
		}
		.signature9{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.1s;
			-o-animation: dash 1s linear forwards 2.1s;
			-moz-animation: dash 1s linear forwards 2.1s;
			animation: dash 1s linear forwards 2.1s;
		}
		.signature10{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.3s;
			-o-animation: dash 1s linear forwards 2.3s;
			-moz-animation: dash 1s linear forwards 2.3s;
			animation: dash 1s linear forwards 2.3s;
		}
		.signature11{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.5s;
			-o-animation: dash 1s linear forwards 2.5s;
			-moz-animation: dash 1s linear forwards 2.5s;
			animation: dash 1s linear forwards 2.5s;
		}
		.signature12{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.7s;
			-o-animation: dash 1s linear forwards 2.7s;
			-moz-animation: dash 1s linear forwards 2.7s;
			animation: dash 1s linear forwards 2.7s;
		}
		.signature13{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 2.9s;
			-o-animation: dash 1s linear forwards 2.9s;
			-moz-animation: dash 1s linear forwards 2.9s;
			animation: dash 1s linear forwards 2.9s;
		}
		.signature14{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 3.1s;
			-o-animation: dash 1s linear forwards 3.1s;
			-moz-animation: dash 1s linear forwards 3.1s;
			animation: dash 1s linear forwards 3.1s;
		}
		.signature15{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 1s linear forwards 3.3s;
			-o-animation: dash 1s linear forwards 3.3s;
			-moz-animation: dash 1s linear forwards 3.3s;
			animation: dash 1s linear forwards 3.3s;
		}

		.signature{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 6s linear forwards 0.5s;
			-o-animation: dash 6s linear forwards 0.5s;
			-moz-animation: dash 6s linear forwards 0.5s;
			animation: dash 6s linear forwards 0.5s;
		}

		.letter{
			opacity: 0;
			-webkit-animation: fadein 2s linear forwards 2.5s;
			-o-animation: fadein 2s linear forwards 2.5s;
			-moz-animation: fadein 2s linear forwards 2.5s;
			animation: fadein 2s linear forwards 2.5s;
		}

		@-webkit-keyframes fadein{
			from{
				opacity: 0;
			}
			to{
				opacity: 1;
			}
		}

      .myHexagon{
			stroke-dasharray: 800;
			stroke-dashoffset: 800;
			-webkit-animation: dash 4s linear forwards 0.5s;
			-o-animation: dash 4s linear forwards 0.5s;
			-moz-animation: dash 4s linear forwards 0.5s;
			animation: dash 4s linear forwards 0.5s;
		}

		@-webkit-keyframes dash{
			from{
				stroke-dashoffset: 800;
			}
			to{
				stroke-dashoffset: 0;
			}
		}
    `,
            }}
          />
        </defs>
      </svg>
    );
  }
}

export default LogoLoader;
