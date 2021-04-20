import { useState } from "react";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


const AppTransition = ({ pages }) => {
  let [isPristine, setIsPristine] = useState(true);
  let [page, setPage] = useState(0);
  const numPages = 2;

  const switcher = () => {
    setIsPristine(false);
    setPage((page + 1) % numPages);
  };

  const getFirstPageClasses = () => {
    if (page === 0) {
      return isPristine ? 'app-transition-current' : 'app-transition-current app-transition-rotateCubeBottomIn';
    }

    return 'app-transition-current app-transition-rotateCubeTopOut';
  };

  const getSecondPageClasses = () => {
    if (page === 1) {
      return 'app-transition-current app-transition-rotateCubeTopIn';
    }

    return isPristine ? '' : 'app-transition-current app-transition-rotateCubeBottomOut';
  };

  return (
    <div className="app-transition-perspective">
      <div className={ 'app-transition-page ' + getFirstPageClasses() }>
        {pages[0]}
        <Button
          className="app-transition-button-next"
          variant="outline-primary"
          onClick={switcher}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </Button>
      </div>
      <div className={ 'app-transition-page ' + getSecondPageClasses() }>
        {pages[1]}
        <Button
          className="app-transition-button-previous"
          variant="outline-primary"
          onClick={switcher}
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </Button>
      </div>
    </div>
  )
};

export default AppTransition;
