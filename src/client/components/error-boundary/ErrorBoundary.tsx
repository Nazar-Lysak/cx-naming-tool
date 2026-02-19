import React, { Component, type ReactNode } from 'react';
import styled from 'styled-components';

import { textData } from '@/data/text';
import { generalStyles } from '@/styles/variables';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 32px;
  background-color: ${generalStyles.colors.light};
  font-family: ${generalStyles.fonts.primary};
  border-radius: 16px;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${generalStyles.colors.red};
  margin: 0 0 16px 0;
`;

const ErrorMessage = styled.p`
  font-size: 1rem;
  color: ${generalStyles.colors.darkGray};
  margin: 0 0 24px 0;
  max-width: 500px;
`;

const RetryButton = styled.button`
  background-color: ${generalStyles.colors.red};
  border: solid 1px ${generalStyles.colors.red};
  color: ${generalStyles.colors.white};
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 250ms ease-out;

  &:hover {
    background-color: ${generalStyles.colors.darkGray};
  }
`;

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>{textData.errorScreen.title}</ErrorTitle>
          <ErrorMessage>{textData.errorScreen.description}</ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            {textData.errorScreen.retryButton}
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
