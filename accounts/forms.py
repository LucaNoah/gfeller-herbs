from django import forms
from .models import UserAccount, CustomerFeedback, Return


class UserAccountForm(forms.ModelForm):
    class Meta:
        model = UserAccount
        exclude = ("user",)

    def __init__(self, *args, **kwargs):
        """
        Set labels and classes
        """
        super().__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].label = False
            self.fields["has_newsletter_sub"].label = "Chek to Subscribe"
            if field != "has_newsletter_sub":
                self.fields[field].widget.attrs['class'] = 'form-input'
                self.fields[field].label = False 


class FeedbackForm(forms.ModelForm):
    class Meta:
        model = CustomerFeedback
        fields = "__all__"


class ReturnForm(forms.ModelForm):
    class Meta:
        model = Return
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        """
        Add placeholders to some fields
        """
        super().__init__(*args, **kwargs)
        for field in self.fields:
            self.fields[field].widget.attrs['class'] = 'form-input'
            self.fields["order"].widget.attrs["placeholder"] = (
                "32 digit" " order number"
            )
            self.fields["products"].widget.attrs[
                "placeholder"
            ] = "Product1 x 3, Product2 x 1, ..."
