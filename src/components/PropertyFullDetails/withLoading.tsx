import React from "react";

export interface WithLoadingProps {
  loading: boolean;
}

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? (
        <div className="spinner-FullDetails">
          <img
            src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
            alt="loading"
          />
        </div>
      ) : (
        <Component {...(props as P)} />
      );
    }
  };
export default withLoading;
