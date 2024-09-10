# Struct Validation

`go mongox` supports validating field values using struct tags (`tag`). This validation feature is based on the validation rules provided by the [playground/validator](https://github.com/go-playground/validator) library.

```go
type User struct {
	mongox.Model   `bson:"inline"`
	Name           string `bson:"name"`
	Age            uint8  `validate:"gte=0,lte=130"`                // Ensures age is between 0 and 130
	Email          string `json:"e-mail" validate:"required,email"` // Indicates this field is required and must be in a valid email format during validation.
	FavouriteColor string `validate:"hexcolor|rgb|rgba"`            // Ensures the provided color value is either a hex color code or in RGB/RGBA format.
}
```

This validation feature is currently available for the following API operations:
- `InsertOne`: Inserts a single document
- `InsertMany`: Inserts multiple documents

By integrating the `playground/validator` library, `go mongox` offers a robust and flexible validation mechanism to ensure data accuracy and consistency.

**Note**: Validation will only be enabled when the `EnableValidationHook` option is set to `true` during plugin initialization (for details, refer to [Enabling Built-in Plugins - Hooks](../plugins/plugins#enabling-built-in-plugins-hooks)).