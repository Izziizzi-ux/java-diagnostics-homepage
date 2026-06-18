import React from 'react';
import { Tile } from '@carbon/react';
import { WarningAlt, Checkmark } from '@carbon/icons-react';
import './EnvironmentCard.scss';

function EnvironmentCard({ title, servers, apps, status, statusType }) {
  const getStatusIcon = () => {
    if (statusType === 'healthy') {
      return <Checkmark size={16} className="environment-card__status-icon environment-card__status-icon--healthy" />;
    }
    return <WarningAlt size={16} className="environment-card__status-icon environment-card__status-icon--warning" />;
  };

  return (
    <Tile className="environment-card">
      <h3 className="environment-card__title">{title}</h3>
      <div className="environment-card__content">
        <p className="environment-card__stats">
          {servers} Servers · {apps} Apps
        </p>
        <div className="environment-card__status">
          {getStatusIcon()}
          <span className={`environment-card__status-text environment-card__status-text--${statusType}`}>
            {status}
          </span>
        </div>
      </div>
    </Tile>
  );
}

export default EnvironmentCard;

// Made with Bob
