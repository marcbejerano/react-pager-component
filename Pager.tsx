import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Pager.css";

interface Props {
  beginIndex: number;
  endIndex: number;
  width?: number;
  firstAndLast?: boolean;
  onChange?: any;
}

interface State {
  currentIndex: number;
}

class Pager extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentIndex: props.beginIndex };
  }

  public render() {
    const { currentIndex } = this.state;
    const { beginIndex, endIndex, firstAndLast } = this.props;
    const width = this.props.width
      ? this.props.width
      : endIndex - beginIndex + 1;
    const isWide = width < endIndex - beginIndex + 1;
    const startIndex =
      isWide && currentIndex > width ? currentIndex - width + 1 : beginIndex;
    const stopIndex = startIndex + width - 1;

    const pages = [];
    for (let p: number = startIndex; p <= stopIndex; p++) {
      pages.push(p);
    }

    return (
      <div className="pager">
        {firstAndLast && (
          <div className="pager-page" onClick={this.goFirst}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </div>
        )}

        {isWide && (
          <div className="pager-page" onClick={this.goPrevious}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
        )}

        {pages.map((p) => (
          <div
            key={"pager-page-" + p}
            className={"pager-page" + (currentIndex === p ? " current" : "")}
            onClick={() => {
              this.go(p);
            }}
          >
            {p}
          </div>
        ))}

        {isWide && (
          <div className="pager-page" onClick={this.goNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        )}

        {firstAndLast && (
          <div className="pager-page" onClick={this.goLast}>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </div>
        )}
      </div>
    );
  }

  private goFirst = () => {
    this.setState({ currentIndex: this.props.beginIndex });
    this.props.onChange && this.props.onChange(this.props.beginIndex);
  };

  private goLast = () => {
    this.setState({ currentIndex: this.props.endIndex });
    this.props.onChange && this.props.onChange(this.props.endIndex);
  };

  private goPrevious = () => {
    if (this.state.currentIndex > this.props.beginIndex) {
      const newIndex = this.state.currentIndex - 1;
      this.setState({ currentIndex: newIndex });
      this.props.onChange && this.props.onChange(newIndex);
    }
  };

  private goNext = () => {
    if (this.state.currentIndex < this.props.endIndex) {
      const newIndex = this.state.currentIndex + 1;
      this.setState({ currentIndex: newIndex });
      this.props.onChange && this.props.onChange(newIndex);
    }
  };

  private go = (page: number) => {
    this.setState({ currentIndex: page });
    this.props.onChange && this.props.onChange(page);
  };
}

export default Pager;
