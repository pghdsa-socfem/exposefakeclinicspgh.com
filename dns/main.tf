variable "domain" {
  default = "exposefakeclinicspgh.com"
}

variable "github_ips" {
  default = ["192.30.252.153", "192.30.252.154"]
}

provider "dnsimple" {}

resource "dnsimple_record" "www_github_pages" {
  domain = "${var.domain}"
  name   = "www"
  value  = "pghdsa-socfem.github.io"
  type   = "CNAME"
}

resource "dnsimple_record" "root_github_a" {
  count  = "${length(var.github_ips)}"
  domain = "${var.domain}"
  name   = ""
  value  = "${element(var.github_ips, count.index)}"
  type   = "A"
}

resource "dnsimple_record" "root_redirect" {
  domain = "${var.domain}"
  name   = ""
  value  = "http://www.${var.domain}"
  type   = "URL"
}
