import React from 'react';
import PropTypes from 'prop-types';
import { ControlledVocab } from '@folio/stripes/smart-components';
import { validate } from '../util';

class WaiveSettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
      intl: PropTypes.object.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.connectedControlledVocab = props.stripes.connect(ControlledVocab);
  }

  render() {
    const label = this.props.stripes.intl.formatMessage({ id: 'ui-users.waives.singular' });

    return (
      <this.connectedControlledVocab
        {...this.props}
        validate={(item, index, items) => validate(item, index, items, 'nameReason', label)}
        baseUrl="waives"
        records="waives"
        label={this.props.stripes.intl.formatMessage({ id: 'ui-users.waives.label' })}
        labelSingular={this.props.stripes.intl.formatMessage({ id: 'ui-users.waives.singular' })}
        objectLabel=""
        visibleFields={['nameReason', 'description']}
        columnMapping={{
          'nameReason': this.props.stripes.intl.formatMessage({ id: 'ui-users.waives.columns.reason' }),
          'description': this.props.stripes.intl.formatMessage({ id: 'ui-users.waives.columns.desc' }),
        }}
        nameKey="waiveReasons"
        hiddenFields={['numberOfObjects']}
        id="waives"
        sortby="nameReason"
      />
    );
  }
}

export default WaiveSettings;
