import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "@mui/system/styled";
import { withStyles } from "@mui/styles";


const totalReviews = 100;
const fiveStarPercentage = 60; 
const fourStarPercentage = 20;
const threeStarPercentage = 10;
const twoStarPercentage = 5; 
const oneStarPercentage = 5;


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
}));


const RatingLinearProgress = withStyles({
  bar: {
    height: 80,
    borderRadius: 5,
  },
})((props) => <LinearProgress variant="determinate" {...props}/>);


const ReviewDistributionProgressBar = () => {
    return (
        <div>
          <div className="text-gray-500">Overall rating of 347 1st-party reviews</div>
          <div className="py-4">
          <div>5 Stars</div>
          <div>
          <RatingLinearProgress value={fiveStarPercentage} />
          
          </div>
          <div>4 Stars</div>
          <RatingLinearProgress value={fourStarPercentage} />
          <div>3 Stars</div>
          <RatingLinearProgress value={threeStarPercentage} />
          <div>2 Stars</div>
          <RatingLinearProgress value={twoStarPercentage} />
          <div>1 Star</div>
          <RatingLinearProgress value={oneStarPercentage} />
        </div></div>
      );
};

export default ReviewDistributionProgressBar;