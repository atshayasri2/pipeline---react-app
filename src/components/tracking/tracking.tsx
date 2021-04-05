import ReactGA from "react-ga";

const Event = (category: string, action: string, label: string) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};
export default Event;
