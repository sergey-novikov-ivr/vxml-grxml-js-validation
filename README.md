# VXML / GRXML Validation Sample (Maven)

There are a few problems for large and complicated IVR applications written in pure VoiceXML with integrations:

- No proper unit testing – requires a full runtime (voice platform) to test
- Limited debugging tools – no simple way to test the application locally on a desktop/laptop
- Difficult automation – end-to-end testing requires telephony simulation
- Easy to make mistakes in GRXML/VXML – verbose XML syntax, weak validation, and small errors (e.g., missing tags, incorrect grammar rules) can break the flow at runtime

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

```
|   pom.xml                 # Maven configuration
|                     
+---validation
|       catalog.xml         # XML catalog
|       grammar.dtd
|       grammar.xsd         # SRGS schema
|       vxml.dtd            # VoiceXML DTD
|       vxml.xsd
|       
\---Webroot
    +---grxml                # SRGS grammar files
    |       hello.grxml
    |       
    +---scripts              
    |   |   script.js
    |   |   
    |   \---test             # Test source
    |           tests.js
    |           
    \---vxml                 # VoiceXML files
            root.vxml
            start.vxml
```            

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

mvn test

This will:
1. Validate VXML files
2. Validate GRXML files
3. Run JavaScript tests


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

