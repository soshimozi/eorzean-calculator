import { Component, ErrorInfo, ReactNode } from "react";
import DefaultErrorUI from "./DefaultErrorUI";

interface ErrorBoundaryProps {
	children?: ReactNode;
	errorUi?: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
	public state: State = {
		hasError: false,
	};

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return this.props.errorUi ?? <DefaultErrorUI />;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
