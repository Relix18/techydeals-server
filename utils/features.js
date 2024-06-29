class Features {
  constructor(query, queryStr) {
    (this.query = query), (this.queryStr = queryStr);
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const { keyword, page, sortBy, sortOrder, rating, ...filterParams } =
      this.queryStr;

    let queryCopy = { ...filterParams };

    const removeFields = ["page"]; // Exclude pagination parameter from filtering

    removeFields.forEach((key) => delete queryCopy[key]);

    // Apply sorting if sorting parameters are provided
    if (sortBy && sortOrder) {
      const sortParams = {};
      sortParams[sortBy] = sortOrder === "desc" ? -1 : 1;
      this.query = this.query.sort(sortParams);
    }

    // Apply rating filtering if rating parameter is provided

    this.query = this.query.find(queryCopy);

    return this;
  }
  new() {
    const newArrival = this.queryStr.newArrival
      ? {
          newArrival: {
            $eq: 1,
          },
        }
      : {};

    this.query = this.query.find({ ...newArrival });
    return this;
  }

  // sort() {
  //   let sortParams = {};

  //   if (this.queryStr.sortBy && this.queryStr.sortOrder) {
  //     sortParams[this.queryStr.sortBy] =
  //       this.queryStr.sortOrder === "desc" ? -1 : 1;

  //     this.query = this.query.sort(sortParams);
  //   }

  //   console.log(sortParams);

  //   return this;
  // }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);
    return this;
  }
}

export default Features;
