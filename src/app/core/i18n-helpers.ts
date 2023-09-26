export class CurrencyHelpers {
    formatNumberIntoCurrency(locale: string = 'en-US', currency: 'USD', monetaryValue: number): string {
        let formatter = new Intl.NumberFormat(locale,
            { style: 'currency', currency: currency }
        );
        return formatter.format(monetaryValue);
    }
}