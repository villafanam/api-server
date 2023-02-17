'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      const record = await this.model.create(json);
      return record;
    } catch (e) {
      console.error('ERROR...error in Collections');
      return e;
    }
  }

  async read(id = null) {
    try {
      if (!id) {
        // get all
        const records = await this.model.findAll();
        return records;
      } else {
        // get by id
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      }
    } catch (e) {
      console.error('ERROR...error in Collections');
      return e;
    }
  }


  async update(id, json) {
    //const record = this.read(id);
    //const updatedRecord = await record.update(json);
    const updatedRecord = await this.model.update(json, {
      where:{id},
      returning: true,
    });
  
    return updatedRecord;
  }


  async delete(id) {
    await this.model.destroy({where: {id}});
  }


}

module.exports = Collection;