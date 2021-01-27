const Campaign = require('../models/Campaign')
// Get All Campaigns
// GET /api/v1/campaigns
// Public
exports.getCampaigns = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all campaigns'
    });
}

// Get single Campaign
// GET /api/v1/campaigns/:id
// Public
exports.getCampaign = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Display Campaign ${req.params.id}`
    });
}

// Create single Campaign
// POST /api/v1/campaigns
// Private
exports.createCampaign = (req, res, next) => {
  console.log(req.body)
  res.status(200).json({
    success: true,
    msg: 'Create new campaign',
    body: req.body
    });
}

// Update single Campaign
// PUT /api/v1/campaigns/:id
// Private
exports.updateCampaign = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update Campaign ${req.params.id}`
    });
}

// Delete single Campaign
// Delete /api/v1/campaigns/:id
// Private
exports.deleteCampaign = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete Campaign ${req.params.id}`
    });
}