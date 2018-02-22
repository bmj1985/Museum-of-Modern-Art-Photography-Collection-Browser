/*eslint-disable */
// const test = require('ava');
const artworks = require('../static/momaartworks.json');
const departmentHeads = require('../static/momadepartmentheads.json');
const moment = require('moment');
moment().format();

function filterArtworks() {
  const photograph = artworks.filter((artwork, index) => {
    if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
      return artwork;
    }
  });
  // console.log(photograph);
}

function formatDeptHeadData() {
  return departmentHeads.map(head => {
    head.PositionBeginYear = new Date(
      head.PositionBeginYear.toString() + '-' + '01' + '-' + '01'
    );
    if (head.PositionEndYear === '') {
      head.PositionEndYear = new Date();
    } else {
      head.PositionEndYear = new Date(
        head.PositionEndYear + '-' + '12' + '-' + '31'
      );
    }
    return head;
  });
}

function filterDepartmentHeads() {
  let newDepartmentHeads = [];
  return departmentHeads.filter(department => {
    return department.DepartmentFullName === 'Department of Photography';
  });
  console.log(departmentHeads);
  departmentHeads = newDepartmentHeads;
  console.log(newDepartmentHeads);
}
console.log(newDepartmentHeads);
function getHeadCurators(artworkDate) {
  const photoCurators = filterDepartmentHeads();
  return photoCurators.filter(head => {
    return (
      moment(artworkDate).isBefore(head.PositionEndYear) &&
      moment(artworkDate).isAfter(head.PositionBeginYear)
    );
  });
  return photoCurators;
}

function getSpecificCurator() {
  let artworkDate = '';
  const photograph = artworks.filter((artwork, index) => {
    if (artwork.Department === 'Photography' && artwork.ThumbnailURL != null) {
      return artwork;
    }
  });
  photograph.forEach(photo => {
    let artworkDate = photo.DateAcquired;
    new Date(artworkDate);
    return departmentHeads.filter(head => {
      moment(artworkDate).isBefore(head.PositionEndYear) &&
        moment(artworkDate).isAfter(head.PositionBeginYear);
    });
  });
  // console.log(departmentHeads.slice(0, 10));
}

filterDepartmentHeads();
getSpecificCurator();
