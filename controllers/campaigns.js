const Campaign = require('../models/Campaign')
// Get All Campaigns
// GET /api/v1/campaigns
// Public
exports.getCampaigns = async (req, res, next) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json({ success: true, data: campaigns });
  } catch (err) {
    res.status(400).json({ success: false });
  };
}

// Get single Campaign
// GET /api/v1/campaigns/:id
// Public
exports.getCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: campaign })
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// Create single Campaign
// POST /api/v1/campaigns
// Private
exports.createCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.create(req.body);

    res.status(201).json({
      success: true,
      data: campaign
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
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