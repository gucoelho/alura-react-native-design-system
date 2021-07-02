import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formatValue = value =>
  new Intl.NumberFormat('pr-BR', {style: 'currency', currency: 'BRL'}).format(
    value,
  );
