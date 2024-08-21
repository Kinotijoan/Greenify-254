import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  // Create Individual users
  const individuals = [];
  for (let i = 0; i < 10; i++) {
    individuals.push({
      userName: faker.internet.userName(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phoneNumber: faker.phone.number(),
      profileimageUrl: faker.image.url(),
    });
  }
  await prisma.individual.createMany({ data: individuals });

  // Create Company accounts
  const companyAccounts = [];
  for (let i = 0; i < 5; i++) {
    companyAccounts.push({
      name: faker.company.name(),
      bio: faker.lorem.paragraph(),
      profileImageUrl: faker.image.url(),
      location: faker.location.city(),
      phoneNumber: faker.phone.number(),
    });
  }
  await prisma.companyAccount.createMany({ data: companyAccounts });

  // Create Donation Organisations
  const donationOrganisations = [];
  for (let i = 0; i < 3; i++) {
    donationOrganisations.push({
      name: faker.company.name(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      location: faker.location.city(),
      bio: faker.lorem.paragraph(),
      profileImageUrl: faker.image.url(),
    });
  }
  await prisma.donationOrganisation.createMany({ data: donationOrganisations });

  // Fetch IDs for relationships
  const individualsIds = (
    await prisma.individual.findMany({ select: { individualId: true } })
  ).map((item) => item.individualId);
  const companyAccountsIds = (
    await prisma.companyAccount.findMany({ select: { companyAccountId: true } })
  ).map((item) => item.companyAccountId);
  const donationOrganisationsIds = (
    await prisma.donationOrganisation.findMany({
      select: { donationOrganisationId: true },
    })
  ).map((item) => item.donationOrganisationId);
  const postsIds = (
    await prisma.post.findMany({ select: { postId: true } })
  ).map((item) => item.postId);

  // Create Posts
  const posts = [];
  for (let i = 0; i < 15; i++) {
    posts.push({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      imageUrl: faker.image.url(),
      category: faker.commerce.product(),
      eventDate: faker.date.future(),
      eventLocation: faker.location.city(),
      eventTime: faker.date.recent().toTimeString(),
      productPrice: parseFloat(faker.commerce.price()),
      websiteLink: faker.internet.url(),
      authorId: faker.helpers.arrayElement(individualsIds),
      companyAccountId: faker.helpers.arrayElement(companyAccountsIds),
      donationOrganisationId: faker.helpers.arrayElement(
        donationOrganisationsIds
      ),
    });
  }
  await prisma.post.createMany({ data: posts });

  // Create Comments
  const comments = [];
  for (let i = 0; i < 20; i++) {
    comments.push({
      content: faker.lorem.sentence(),
      postId: faker.helpers.arrayElement(postsIds),
      authorId: faker.helpers.arrayElement(individualsIds),
    });
  }
  await prisma.comment.createMany({ data: comments });

  // Create Likes
  const likes = [];
  for (let i = 0; i < 20; i++) {
    likes.push({
      postId: faker.helpers.arrayElement(postsIds),
      authorId: faker.helpers.arrayElement(individualsIds),
    });
  }
  await prisma.like.createMany({ data: likes });

  console.log("Database seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
