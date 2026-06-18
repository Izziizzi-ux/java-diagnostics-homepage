import React from 'react';
import { ClickableTile } from '@carbon/react';
import { ArrowRight } from '@carbon/icons-react';
import './CapabilityCard.scss';

function CapabilityCard({ layer, layerType, title, description, timestamp }) {
  return (
    <ClickableTile className="capability-card">
      <div className="capability-card__header">
        <span className={`capability-card__badge capability-card__badge--${layerType}`}>
          {layer}
        </span>
        <h4 className="capability-card__title">{title}</h4>
      </div>
      <div className="capability-card__content">
        <p className="capability-card__description">{description}</p>
        <div className="capability-card__footer">
          <span className="capability-card__timestamp">{timestamp}</span>
          <div className="capability-card__icon">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </ClickableTile>
  );
}

export default CapabilityCard;

// Made with Bob
