# Form Builder

---

<br/>


Build, control and validate HTML forms. Built using:

- [React Hook Forms](https://react-hook-form.com/)

- [Zod Validation](https://zod.dev/json-schema)

- [AJV Schema Validation](https://ajv.js.org/)

<br/>



### Initial Setup

- Unzip `files/tinymce.zip` and paste to the project's `public` folder
- `TINYMCE_FILE_LOCATION` points to the location of `tinymce.min.js`

<br/>



### Example Usage

```javascript
const renderedForm = useFormBuilder(config, validationRules, callback, settings);

return (
    <div>{ renderedForm }</div>
);
```

<br/>



#### Properties:

| Prop              | Value    | Required | Notes                                  |
|-------------------|----------|:--------:|----------------------------------------|
| `config`          | `object` |   true   | JSON file                              |
| `validationRules` | `object` |   true   | Zod validation object                  |
| `callback`        | `method` |   true   | Triggers on successful form submission |
| `settings`        | `object` |    -     | See Settings table                     |

<br/>



#### Settings:

| Prop             | Value     | Notes                                                                            |
|------------------|-----------|----------------------------------------------------------------------------------|
| `defaultValues`  | `object`  | JSON object to prepopulate field values                                          |
| `styles`         | `object`  | Additional CSS rules                                                             |
| `handleChange`   | `method`  | Callback. Triggers on step change                                                |
| `validationMode` | `string`  | When the validation should occur. \| options: `"onChange", "onBlur", "onSubmit"` |
| `devtools`       | `boolean` | Display React Hook Form dev tools \| default: `false`                            |
| `scroll`         | `boolean` | Scroll to first error \| default: `true`                                         |
| `debug`          | `boolean` | Display errors messages in the console \| default: `false`                       |

<br/>



### Useful Links

- [Confluence: How to Create a Form](https://ioausa.atlassian.net/wiki/spaces/DEVELOPMEN/pages/1022329283/How+To+Create+a+Form)

- [TinyMCE](https://www.tiny.cloud/docs/tinymce/latest/)