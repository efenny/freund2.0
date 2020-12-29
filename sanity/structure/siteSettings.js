import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

export default function SiteSettings() {
  return S.list()
    .title('Site Settings')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(() => <MdSettings />)
        .child(
          S.document().schemaType('site-settings').documentId('site-settings')
        ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'site-settings'
      ),
    ]);
}
