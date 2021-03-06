import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

require("./AaFooter.scss");

class AaFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    var markdown = require("markdown").markdown;
    const newAddressHTML = markdown.toHTML(
      this.props.address.replace(/\\/g, "  ")
    );
    return (
      <footer className="footer">
        <div className="footerAddress">{ReactHtmlParser(newAddressHTML)}</div>
        <div className="footerSocial">
          <ul>
            {this.props.socialLinks.facebook ? (
              <li>
                <a href={this.props.socialLinks.facebook}>
                  <FaFacebook size="2em" />
                </a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.twitter ? (
              <li>
                <a href={this.props.socialLinks.twitter}>
                  <FaTwitter size="2em" />
                </a>
              </li>
            ) : (
              ""
            )}
            {this.props.socialLinks.instagram ? (
              <li>
                <a href={this.props.socialLinks.instagram}>
                  <FaInstagram size="2em" />
                </a>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        {/* <div className="footerSocial">{this.props.socialLinks}</div> */}
      </footer>
    );
  }
}

export default AaFooter;
