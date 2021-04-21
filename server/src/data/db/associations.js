export default models => {
  const {
    Area,
    Region,
    Locality,
    Notary,
    Organization,
    PhoneNumber,
    Contacts,
    Employment
  } = models;

  Organization.hasMany(Employment);
  Organization.belongsTo(Contacts);

  Employment.belongsTo(Organization);
  Employment.belongsTo(Notary);

  Notary.hasMany(Employment);
  Notary.belongsTo(Contacts);

  Contacts.hasMany(PhoneNumber);
  Contacts.belongsTo(Region);
  Contacts.belongsTo(Area);
  Contacts.belongsTo(Locality);

  Region.hasMany(Area);
  Area.belongsTo(Region);

  Area.hasMany(Locality);
  Locality.belongsTo(Area);
};
