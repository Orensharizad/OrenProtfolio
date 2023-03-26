import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'backgroundInfo',
      title: 'BackgroundInfo',
      type: 'image',

    },
    {
      name: 'phoneNumber',
      title: 'PhoneNumber',
      type: 'string',

    },
    {
      name: 'profilePic',
      title: 'ProfilePic',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',

    },



  ],


})
