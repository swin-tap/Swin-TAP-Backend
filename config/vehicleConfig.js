const condition = {
  new: 'new',
  used: 'used',
};

const transmission = {
  auto: 'auto',
  manual: 'manual',
  triptonic: 'triptonic',
};

const fuel_type = {
  petrol: 'petrol',
  diesel: 'diesel',
  gas: 'gas',
  hybrid: 'hybrid',
  electric: 'electric',
};

const inspection_status = {
  not_requested: 'not_requested',
  requested: 'requested',
  accepted: 'accepted',
  completed: 'completed',
};

module.exports = { condition, transmission, fuel_type, inspection_status };
