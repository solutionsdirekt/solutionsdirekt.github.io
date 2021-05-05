(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{485:function(e,s,n){"use strict";n.r(s);var t=n(6),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Die Verwendung von self-signed Certificates ist im Bereich Web Development kaum wegzudenken. Gerade für Testsysteme, Regressionstests und nicht zu letzt die lokale Entwicklungsumgebung. Das Generieren der Schlüssel und das entsprechende Signieren lässt sich mittels openssl oder powershell command in wenigen Sekunden erledigen.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("openssl req -x509 -newkey rsa:4096 -keyout key.pem -nodes -out cert.pem -days 365\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[e._v("New"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SelfSignedCertificate "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Subject "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CN=dev.local"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("FriendlyName "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Basic Self-Signed Cert"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("NotAfter "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("[DateTime]")]),e._v("::Now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("AddYears"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("CertStoreLocation "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Cert:\\LocalMachine\\My"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("KeyExportPolicy Exportable\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Beide Befehle generieren ein self-signed certificate, welches man für eine Development SSL Konfiguration verwenden kann. Dies funktioniert seit vielen Jahren problemlos. Nun ist jedoch jemand auf die Idee gekommen, dies für nicht mehr ausreichend zu erklären.")]),e._v(" "),n("p",[e._v("Mit den letzten Java releases 8u241, 11.0.6 und 13.0.2 wurde eine erweitere Prüfung auf ein Basic Constraint eingefügt. Wenn CA=true nicht gesetzt ist, werden die Zertifikate nicht mehr als Root Zertifikat akzeptiert. Statt dessen heißt es nur:")]),e._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[e._v("TrustAnchor with subject "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CN=dev.local"')]),e._v(" is not a CA certificate\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Damit stellen sich zwei Fragen, zum einen, wie erkennt man das Problem und wie löst man es?")]),e._v(" "),n("p",[e._v("Erkennen ist hier relativ einfach. Die einfachste Möglichkeit unter Windows ist wohl die einfache Zertifikat Anzeige, die man üblicherwerweise beim Öffnen von .cer oder .crt Dateien bekommt. Hier kann dann ein schnelles Umbenennen des .pem oder .der in .cer sehr hilfreich sein. Die Anzeige stellt unter Details die Erweiterungen dar. Unter Basic Constraints kann man also sofort sehen, ob der Schalter für CA gesetzt ist, oder eben nicht.")]),e._v(" "),n("p",[e._v("Über die Console lässt sich das mit openssl ebenfalls prüfen:")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("openssl x509 -in mycert.crt -text -noout\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Der Output ist deutlich länger als hier gezeigt, aber etwa in der Mitte findet man die Informationen zu den Extensions und dem basic Constraint für CA=true")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(".\n.\n.\n                    b8:86:e6:19:9c:9c:bf:77:93:14:43:ac:57:9c:e8:\n                    8c:44:67\n                Exponent: 65537 (0x10001)\n        X509v3 extensions:\n            X509v3 Subject Key Identifier:\n                69:E8:08:67:32:F5:A2:D0:2A:81:2E:ED:40:1D:9C:D8:20:68:76:A0\n            X509v3 Authority Key Identifier:\n                keyid:69:E8:08:67:32:F5:A2:D0:2A:81:2E:ED:40:1D:9C:D8:20:68:76:A0\n\n            X509v3 Basic Constraints: critical\n                CA:TRUE\n    Signature Algorithm: sha256WithRSAEncryption\n         4b:7c:89:76:38:1c:f4:16:d1:0c:c0:44:f5:4e:5f:4f:ee:f5:\n         47:48:9f:63:1a:f2:fd:5c:80:65:e8:a4:dd:ac:0d:89:2e:ec:\n.\n.\n.\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br")])]),n("p",[e._v('Aber was kann man tun, wenn man den Fehler "TrustAnchor with subject CN=....  is not a CA certificate" in den logs findet? Die kurze Antwort: einfach das Zertifikat neu generieren und das CA=true gleich richtig setzen. Für die Bash ist das relativ einfach:')]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("openssl req -x509 -newkey rsa:4096 -keyout key.pem -nodes -out cert.pem -days "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("365")]),e._v("\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Dies ist der selbe Befehl, da OpenSSL den Schalter in der Default Konfiguration offenbar schon setzt. Die Powershell macht dies leider nicht ganz so einfach. Der oben gezeigte Befehl generiert das self-signed certificate leider ohne CA=true. Hier muss man manuell noch mal die Extension setzen.")]),e._v(" "),n("div",{staticClass:"language-powershell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-powershell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$rootextension")]),e._v(" = "),n("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("[System.Security.Cryptography.X509Certificates.X509BasicConstraintsExtension]")]),e._v("::new"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("$true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("$true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("$true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$root")]),e._v(" = New"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("SelfSignedCertificate "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Subject "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CN=dev.local"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("FriendlyName "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Self-Signed Root Cert"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Extension "),n("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$rootextension")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("NotAfter "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("[DateTime]")]),e._v("::Now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("AddYears"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("CertStoreLocation "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Cert:\\LocalMachine\\My"')]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("KeyExportPolicy Exportable\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("Sollten alle Stricke reißen und es muss unbedingt ein CA=false self-signed certificate sein, dann kann man dieses Verhalten auch explizit auf den alten Zustand zurückdrehen.")]),e._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[e._v("-Djdk.security.allowNonCaAnchor"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Über das Property kann in allen neueren Java Versionen das Verhalten konfiguriert werden.")])])}),[],!1,null,null,null);s.default=a.exports}}]);