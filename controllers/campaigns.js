const ErrorResponse = require('../utils/errorResponse')
const Campaign = require('../models/Campaign')
// Get All Campaigns
// GET /api/v1/campaigns
// Public
exports.getCampaigns = async (req, res, next) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).json({ success: true, count: campaigns.length, data: campaigns });
  } catch (err) {
    next(err);
  };
}

// Get single Campaign
// GET /api/v1/campaigns/:id
// Public
exports.getCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.findById(req.params.id);

    if (!campaign) {
      return next(new ErrorResponse(`Campaign not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: campaign })
  } catch (err) {
    //res.status(400).json({ success: false });
    next(err);
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
    next(err);
  }
}

// Update single Campaign
// PUT /api/v1/campaigns/:id
// Private
exports.updateCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!campaign) {
      return next(new ErrorResponse(`Campaign not found with id of ${req.params.id}`, 404));
    }

    res.status(200).json({ success: true, data: campaign });
  } catch (err) {
    next(err);
  }
}

// Delete single Campaign
// Delete /api/v1/campaigns/:id
// Private
exports.deleteCampaign = async (req, res, next) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);

    if (!campaign) {
      return next(new ErrorResponse(`Campaign not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    next(err);
  }
}