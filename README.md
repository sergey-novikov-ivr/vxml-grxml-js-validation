# VXML / GRXML Validation Sample (Maven)

This project is a simple proof-of-concept demonstrating:

- Static validation of VoiceXML (VXML)
- Static validation of SRGS grammars (GRXML)
- Basic unit testing of JavaScript

The implementation is intentionally minimal and reflects an older, stable approach that has been used in real IVR environments.

---

## 📌 Purpose

The goal of this project is to provide a lightweight validation pipeline for:

1. **VoiceXML files (`.vxml`)**
2. **SRGS grammar files (`.grxml`)**
3. **JavaScript logic (unit-tested)**

---

## 🧩 Technologies Used

- Maven
- xml-maven-plugin (XML validation)
- XML Catalog (offline DTD/XSD resolution)
- Jasmine (JavaScript unit testing)
- Selenium + PhantomJS (legacy test runner)

---

## 📁 Project Structure

.
├── pom.xml
├── Webroot/
│   ├── vxml/        # VoiceXML files
│   └── grxml/       # SRGS grammar files
├── validation/
│   ├── catalog.xml  # XML catalog
│   ├── vxml.dtd     # VoiceXML DTD
│   └── grammar.xsd  # SRGS schema
└── src/             # JS test sources (if applicable)

---

## ⚙️ How It Works

### 1. VXML Validation

VoiceXML files are validated against the VoiceXML 2.1 DTD.

### 2. GRXML Validation

Grammar files (.grxml) are validated using SRGS XML Schema (XSD).

### 3. XML Catalog

External resources are mapped locally using validation/catalog.xml.

This ensures:
- No external HTTP calls
- Faster builds
- Improved security

### 4. JavaScript Unit Testing

Basic unit tests are executed using Jasmine with a headless browser.

---

## ▶️ How to Run

mvn clean install

This will:
1. Validate XML files
2. Run JavaScript tests

---

## ⚠️ Notes

- Uses legacy tools (PhantomJS, Selenium 2.x)
- May show warnings on modern Java versions
- Validation still works correctly

---

## 🔒 Security Considerations

- External entity loading disabled via XML catalog
- Prevents XXE attacks and external dependencies

---

## 💡 Limitations

- GRXML validation may be partial
- Static validation only
- Legacy test stack

---

## 📦 Purpose

This project is preserved as a reference implementation.

No further development is planned.

---

