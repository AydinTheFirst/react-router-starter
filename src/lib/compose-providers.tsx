type Provider = ({ children }: React.PropsWithChildren) => React.ReactNode;

export function composeProviders(...providers: Provider[]): Provider {
	return ({ children }: React.PropsWithChildren) =>
		providers.reduceRight(
			// biome-ignore lint/correctness/useJsxKeyInIterable: No keys needed here
			(acc, Provider) => <Provider>{acc}</Provider>,
			children,
		);
}
