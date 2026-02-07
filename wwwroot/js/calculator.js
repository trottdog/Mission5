$(document).ready(function () {
    const rate = Number(window.MOTO_RATE); // hourly rate from Razor

    $("#calcBtn").on("click", function () {
        $("#hoursError").hide();

        const hoursRaw = $("#hoursInput").val();
        const hours = Number(hoursRaw);

        // Validation: must be a real number and > 0
        if (!hoursRaw || isNaN(hours) || hours <= 0) {
            $("#totalOutput").val("");
            $("#hoursError").show();
            return;
        }

        const total = hours * rate;
        $("#totalOutput").val(`$${total.toFixed(2)}`);
    });
});
