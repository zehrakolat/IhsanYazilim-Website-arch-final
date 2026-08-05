// TODO: gerçek şema/ORM (Prisma/TypeORM) ile değiştirin.
// Şimdilik API-SPEC.md'deki şekli birebir yansıtan mock veri.
module.exports = {
  async find() {
    return {
      experienceYears: 21,
      cityCount: 43,
      activeUsers: 6551,
      trafficM: 105,
      kaskoM: 11,
    };
  },
};
