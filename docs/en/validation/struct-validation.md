# Struct Validation
`go-mongox` supports field value validation using struct tags (`tag`), leveraging the comprehensive struct validation rules provided by the [playground/validator](https://github.com/go-playground/validator) library.

```go
type User struct {
	mongox.Model   `bson:"inline"`
	Name           string `bson:"name"`
	Age            uint8  `validate:"gte=0,lte=130"`                // Ensures age is between 0 and 130 years
	Email          string `json:"e-mail" validate:"required,email"` // Field must be present and follow email format
	FavouriteColor string `validate:"hexcolor|rgb|rgba"`            // Ensures the color value is either in hex, RGB, or RGBA format
}
```

This validation feature is currently applicable to the following API operations:
- `InsertOne`: Insert a single document
- `InsertMany`: Insert multiple documents
- `Upsert`: Save a document

By integrating the `playground/validator` library, `go-mongox` provides powerful and flexible data validation to ensure accuracy and consistency of data.