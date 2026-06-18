import React from 'react';
import { ClickableTile, Tag, Button } from '@carbon/react';
import { OverflowMenuHorizontal, ArrowRight } from '@carbon/icons-react';
import './CapabilityCard.scss';

function CapabilityCard({
  layer,
  layerType,
  title,
  description,
  timestamp,
  onClick,
  tags = [],
  showActionButton = false
}) {
  return (
    <ClickableTile className="capability-card" onClick={onClick}>
      <div className="capability-card__header">
        <h4 className="capability-card__title">{title}</h4>
        {tags.length > 0 && (
          <div className="capability-card__tags">
            {tags.map((tag, index) => (
              <Tag
                key={index}
                type={tag.type}
                size="sm"
                className="capability-card__tag"
              >
                {tag.label}
              </Tag>
            ))}
          </div>
        )}
        {showActionButton && (
          <Button
            kind="ghost"
            size="md"
            hasIconOnly
            renderIcon={OverflowMenuHorizontal}
            iconDescription="More actions"
            className="capability-card__action-button"
          />
        )}
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
