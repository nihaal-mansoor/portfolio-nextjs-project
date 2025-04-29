import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons"; // Optional: Use a better icon

export const startup = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  icon: DocumentTextIcon, // Optional but looks nice
  fields: [
    // Title Field
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Please enter a title"),
    }),

    // Slug Field
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required().error("Please generate a slug"),
    }),

    // Author Reference
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required().error("Please select an author"),
    }),

    // Image (with preview)
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      validation: (Rule) => Rule.required().uri({
        allowRelative: false,
        scheme: ['http', 'https'],
      }).error("Please enter a valid image URL"),
    }),

    // Description (Short)
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(30)
          .max(300)
          .error("Description must be between 30-300 characters"),
    }),

    // Pitch (Markdown for detailed pitch)
    defineField({
      name: "pitch",
      title: "Startup Pitch",
      type: "markdown",
      validation: (Rule) => Rule.required().error("Please write a startup pitch"),
    }),

    // Category
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(50)
          .error("Please specify a category"),
    }),

    // Bio (Optional founder bio or company background)
    defineField({
      name: "bio",
      title: "Founder Bio / Company Background",
      type: "text",
    }),

    // Views (optional - tracking views)
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0).error("Views cannot be negative"),
    }),
  ],

  // Customize how the document looks inside Studio
//   preview: {
//     select: {
//       title: "title",
//       media: "image",
//       authorName: "author.name",
//     },
//     prepare(selection) {
//       const { title, media, authorName } = selection;
//       return {
//         title: title,
//         subtitle: authorName ? `By ${authorName}` : "No author",
//         media: media,
//       };
//     },
//   },
});
