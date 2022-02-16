const Course = require("../models/Course");

const { mutipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  // [GET] /
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   !err ? res.json(courses) : next(err);
    // });

    Course.find({})
      .then((courses) => {
        // courses = courses.map((course) => course.toObject());

        res.render("home", { courses: mutipleMongooseToObject(courses) }); // Lấy data course sang view
      })
      .catch((error) => next(error));
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
