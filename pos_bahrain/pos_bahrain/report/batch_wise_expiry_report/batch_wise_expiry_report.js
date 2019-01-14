// Copyright (c) 2016, 	9t9it and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports['Batch-wise Expiry Report'] = {
  filters: [
    {
      fieldname: 'company',
      label: __('Company'),
      fieldtype: 'Link',
      options: 'Company',
      reqd: 1,
      default: frappe.defaults.get_user_default('company'),
    },
    {
      fieldname: 'query_date',
      label: __('Query Date'),
      fieldtype: 'Date',
      default: frappe.datetime.get_today(),
    },
    {
      fieldname: 'price_list1',
      label: __('Price List'),
      fieldtype: 'Link',
      options: 'Price List',
      reqd: 1,
    },
    {
      fieldname: 'price_list2',
      label: __('Price List'),
      fieldtype: 'Link',
      options: 'Price List',
      reqd: 1,
    },
  ],
};
