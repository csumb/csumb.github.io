var counter = 1,
  linkCnt = 1,
  linkSocial = 1,
  numSubCat = 0;
function ensureHTTP(e) {
  var t = new RegExp("@");
  return /^https?:\/\//i.test(e)
    ? e
    : t.test(e)
    ? "mailto:" + e
    : "https://" + e;
}
function SelectText(e) {
  var t,
    a,
    l = document,
    n = l.getElementById(e);
  l.body.createTextRange
    ? ((t = document.body.createTextRange()).moveToElementText(n), t.select())
    : window.getSelection &&
      ((a = window.getSelection()),
      (t = document.createRange()).selectNodeContents(n),
      a.removeAllRanges(),
      a.addRange(t));
}
function generateSubTitle(e, t) {
  void 0 === e && (e = ""), void 0 === t && (t = "");
  var a =
    '<div class="subDeptContainer"><div onClick="destroyElm(this)" class="destroyElm">X</div><div class="inputContainer" style="width:45%;"><label> Sub Title ' +
    counter +
    ' </label><input class="subValue" type="text" value="' +
    e +
    '" /></div><div class="inputContainer" style="width:45%;"><label> Sub Department ' +
    counter +
    ' </label><input class="subValue2" type="text" value="' +
    t +
    '" /></div><br class="clear" /></div><br />';
  $("#subDeptHolder").append(a), counter++;
}

function createSubCat(e) {
  void 0 === e && (elm = !1);
  var t =
    '<div id="subDeptMainContainer' +
    ++numSubCat +
    '" class="subDeptMainContainer"><div onClick="destroyElm2(this)" class="destroyElm2">X</div>Custom Link - Line ' +
    numSubCat +
    "<br /><br />";
  $("#subLinkHolder").append(t).sortable({ connectWith: "#subLinkHolder" }),
    e ||
      (createLinks(),
      $("html, body").animate(
        { scrollTop: $("#subLinkHolder").offset().top },
        1e3
      ));
}
function capitalize(e) {
  return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}
function createLinks(e, t, a) {
  void 0 === e && (e = ""),
    void 0 === t && (t = ""),
    void 0 === a && (a = ""),
    0 == numSubCat &&
      (createSubCat(!0),
      $("html, body").animate(
        { scrollTop: $("#subLinkHolder").offset().top },
        1e3
      ));
  var l =
    '<div class="linkContainer">     <div onClick="destroyElm(this)" class="destroyElm">X</div>     <br class="clear" />     <div class="inputContainer phone custom">     <label> Is this a URL? </label>     <select onChange="changeElm(this)">      <option>Yes</option>      <option>No</option>     </select>     </div>     <div class="inputContainer phone custom">     <label> Custom Statement ' +
    linkCnt +
    ' </label>     <input class="subValueString" type="text" value="' +
    e +
    '" />     </div>     <div class="inputContainer phone custom">     <label> Word(s) To Be Linked ' +
    linkCnt +
    ' </label>     <input class="subValueLinkText" type="text" value="' +
    t +
    '" />     </div>     <div class="inputContainer phone custom">     <label> URL ' +
    linkCnt +
    ' </label>     <input class="subValueLink" type="text" value="' +
    a +
    '" />     </div>     <br class="clear" />     </div>';
  $("#subDeptMainContainer" + numSubCat)
    .append(l)
    .sortable({ connectWith: ".subDeptMainContainer" }),
    linkCnt++;
}
function changeElm(e) {
  if ("No" === e.value) {
    var t = $(e).parent().parent();
    $(".subValueLinkText", t).prop("disabled", !0),
      $(".subValueLink", t).prop("disabled", !0);
  } else
    $(".subValueLinkText", t).prop("disabled", !1),
      $(".subValueLink", t).prop("disabled", !1);
}
function destroyElm(e) {
  var t = $(e).parent();
  $(t).remove();
}
function destroyElm2(e) {
  var t = $(e).parent();
  $(t).remove(), (numSubCat = 0);
}
function hideDialog() {
  $(".askDateRange").remove(), (isHere = 0);
}
function phoneFormatter() {
  $("#phone").on("input", function () {
    updatePhone(this);
  });
}
function updatePhone(e) {
  var t = $(e).val().replace(/\D/g, "");
  10 == t.length && (t = t.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")),
    $(e).val(t);
}
function showMask() {
  $("#mask").fadeToggle(500, function () {
    $(".thePreview").animate(
      { width: "75%", padding: "25px" },
      500,
      function () {
        $(".hidePreview").fadeToggle(500);
      }
    );
  });
}
function hidePreview() {
  $(".hidePreview").fadeToggle(500, function () {
    $(".thePreview").animate({ width: "0%", padding: "0px" }, 500, function () {
      $("#mask").fadeToggle(500);
    });
  });
}
function updateAll() {
 {
    if (
      (showMask(),
      $(".tableHolder").empty(),
      $(".hyperlinkHolder").empty(),
      $(".logoHolder").empty(),
      $(".socialMediaHolder").empty(),
      $("#address").empty(),
      $("#preName").html($("#name").val()),
      $("#preTitleDept").html($("#titleDept").val()),
      $("#preDept").html($("#Dept").val()),
      $("#preSchool").html("California State University, Monterey Bay"),
      $(".subValue").each(function () {
        var e = $(this).parent().parent(),
          t = $(".subValue2", e).val(),
          a =
            '<tr><td><span style="color:#000; font-size:8pt; font-weight:normal;">' +
            $(this).val() +
            '</span></td></tr><tr><td><span style="color:#000; font-size:8pt; font-weight:normal;">' +
            t +
            "</span></td></tr>";
        $(".tableHolder").append(a);
      }),
      (phoneVal = ""),
      "" != $("#phone").val() &&
        (phoneVal =
          '<strong>Phone: </strong> <a style="color:black; font-size:8pt; text-decoration:none;" href="tel:' +
          $("#phone").val() +
          '">' +
          $("#phone").val() +
          "</a>&nbsp;&nbsp;"),
      $("#prePhone").html(phoneVal),
      "" != $("#email").val())
    )
      if (validateEmail($("#email").val())) {
        var e = $("#email").val().toLowerCase();
        $("#preEmail").html(
          '<strong>Email: </strong><a style="color:black; font-size:8pt; text-decoration:none;" href="mailto:' +
            e +
            '">' +
            e +
            "<a/>"
        );
      } else
        alert(
          "That is not a valid email.  Please make sure to enter a valid email address"
        );
    if ("" != $("#web").val()) {
      var t = $("#web").val().toLowerCase(),
        a = ensureHTTP(t);
      $("#preWeb").html(
        '<strong style="color: #112E51;"><a style="color:black; font-size:8pt; text-decoration:none;" href="' +
          a +
          '">' +
          t +
          "</a></strong>"
      );
    }
    if ($(".subDeptMainContainer")[0]) {
      l = '<tr height="10"><td align="left"></td></tr>';
      $(".hyperlinkHolder").prepend(l);
    }
    if (
      ($(".subDeptMainContainer").each(function () {
        var e = '<tr><td align="left">',
          t = $(this),
          a = 0;
        $(".linkContainer", t).each(function () {
          a > 0 && (e += " | ");
          var t = generateLink(
            $(".subValueString", this).val(),
            $(".subValueLinkText", this).val(),
            $(".subValueLink", this).val()
          );
          (e +=
            '<span style="color:#000; font-size:8pt; font-weight:normal;"> ' +
            t +
            " </span>"),
            a++;
        }),
          (e += "</td></tr>"),
          $(".hyperlinkHolder").append(e);
      }),
      $(".subDeptContainerSocial")[0])
    ) {
      l = '<tr height="10"><td align="left"></td></tr>';
      $(".socialMediaHolder").prepend(l);
    }
    var n = "<tr><td>";
    $(".subDeptContainerSocial").each(function () {
      var e = $(".subValLink", this).val(),
        t = $(".socialTitle", this).val();
      n =
        n +
        '<span style="color:#fff; background:#8C1D40; padding:1px; font-size:8pt; font-weight:normal;"><a style="color:#fff; text-decoration:none;" href="' +
        ensureHTTP(e) +
        '">' +
        t +
        "</a></span>&nbsp;";
    }),
      (n += "</td></tr>"),
      $(".socialMediaHolder").append(n),
      $(".logoHolder").append(otherStuff());
  }
}
function generateLink(e, t, a) {
  return "" !== t
    ? ((slitWords = e.split(t)),
      (a = ensureHTTP(a)),
      null != slitWords[0] && null != slitWords[1]
        ? ((string =
            slitWords[0] +
            '<a style="color:#8C1D40; font-size:8pt;" href="' +
            a +
            '">' +
            t +
            "</a> " +
            slitWords[1]),
          string)
        : "")
    : e;
}
function validateEmail(e) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    e
  );
}
function otherStuff() {
  var e = $(".logoSelection.active").data("which");
  return "inno" == e
    ? '<style>.allFormHolder{display:flex; flex-direction:row;} .textHolder{margin-left: 10px;}</style><tr><td><span style="color:#000; font-size:8pt; font-weight:bold; background:#FFC627;"></span></td></tr><tr><td><span style="color:#000; font-size:8pt;"><img src="/email-media/CSUMB_stacked_logo_color.png" style="width: 150px;"></span></td></tr>'
    : "GlobalImpact" == e
    ? '<style>.t-flex-cont{display: flex;} .textHolder{margin-top: 20px;} #prePhone{margin-left: -2px}</style><tr><td><span style="color:#000; font-size:8pt; font-weight:bold; background:#FFC627;"></span></td></tr><tr><td><span style="color:#000; font-size:8pt;"><img src="/email-media/CSUMB_typemark_blue.png" style="width: 275px;"></span></td></tr>'
    : "Return" == e
    ? '<style>.t-flex-cont{display: flex;} .textHolder{border-left: medium solid #112E55;margin-top: 20px;padding-left: 10px} #prePhone{margin-left: -2px;}</style><tr><td><span style="color:#8C1D40; font-size:8pt; font-weight:bold; background:#FFC627;"></span></td></tr><tr></tr><tr><td><span style="color:#8C1D40; font-size:8npt;"><img src="/email-media/CSUMB_primary_logo_color.png" style="width: 175px;"></span></td></tr>'
    : "";
}
function saveJSON() {
  var e = fillData();
  $("#jsonData").val(e), $("#userName").val($("#name").val());
}
function doData() {
  var e = $("#name").val(),
    t = $("#titleDept").val();
  $.post("lib/processSaveData.php", { name: e, dept: t }, function (e) {
    console.log(e);
  });
}
function fillData() {
  jsonObj = [];
  var e = $("#name").val(),
    t = $("#titleDept").val(),
    a = $("#Dept").val(),
    l = $("#phone").val(),
    n = $("#fax").val(),
    i = $("#cell").val(),
    o = $("#email").val(),
    s = $("#addLine1").val(),
    r = $("#addLine2").val(),
    d = $("#addLine3").val(),
    p = [];
  $(".subDeptContainer").each(function () {
    var e = $(this),
      t = $(".subValue", e).val(),
      a = $(".subValue2", e).val();
    (subItem = {}), (subItem.value = t), (subItem.value2 = a), p.push(subItem);
  });
  var u = [];
  $(".subDeptMainContainer").each(function () {
    var e = $(this);
    (subItem = []),
      $(".linkContainer", e).each(function () {
        var e = $(this),
          t = $(".subValueString", e).val(),
          a = $(".subValueLinkText", e).val(),
          l = $(".subValueLink", e).val();
        (subItem2 = {}),
          (subItem2.string = t),
          (subItem2.linktext = a),
          (subItem2.link = l),
          subItem.push(subItem2);
      }),
      (subItem.item = subItem2),
      u.push(subItem),
      0;
  });
  var c = [];
  return (
    $(".subDeptContainerSocial").each(function () {
      var e = $(this),
        t = $(".subValLink", e).val(),
        a = $(".socialTitle", e).val();
      (subItem = {}), (subItem.title = a), (subItem.link = t), c.push(subItem);
    }),
    (item = {}),
    (item.name = e),
    (item.titleDept = t),
    (item.dept = a),
    (item.phone = l),
    (item.fax = n),
    (item.cell = i),
    (item.email = o),
    (item.addLine1 = s),
    (item.addLine2 = r),
    (item.addLine3 = d),
    (item.addTitles = p),
    (item.linklines = u),
    (item.social = c),
    jsonObj.push(item),
    JSON.stringify(jsonObj)
  );
}
(isHere = 0),
  $("form.uploadForm").ajaxForm({
    complete: function (e) {
      var t = e.responseText;
      try {
        var a = jQuery.parseJSON(t);
        (a = a[0]),
          $("#name").val(a.name),
          $("#titleDept").val(a.titleDept),
          $("#Dept").val(a.dept),
          $("#phone").val(a.phone),
          $("#fax").val(a.fax),
          $("#cell").val(a.cell),
          $("#email").val(a.email);
        for (let e of a.addTitles) generateSubTitle(e.value, e.value2);
        var l = 0;
        for (let e of a.linklines) {
          createSubCat(++l);
          for (let t of e) {
            var n = t;
            createLinks(n.string, n.linktext, n.link);
          }
        }
        for (let e of a.social) createSocialMedia(e.title, e.link);
      } catch (e) {
        alert("Invald Template File");
      }
    },
  });
