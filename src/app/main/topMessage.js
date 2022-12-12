import React from 'react';
import CustomCard from '../components/customCard';
import { decrement } from "./store/capstoneSlice"

function TopMessage() {
  return (
    <div className="top-card">
      <CustomCard variant="Primary" title="Great Food, Great Time" textAlign="text-center" width="100%" customClass="mb-2">
        <div style={{ fontSize: 'small' }}>
          Our chefs at WiWi make delicious food selections every week - you pick, we cook and deliver.
        </div>
      </CustomCard>
    </div>
  )
};

export default TopMessage;
