TFPLAN := main.tfplan

.PHONY: plan
plan:
	terraform plan -out $(TFPLAN)

.PHONY: apply
apply: $(TFPLAN)
	terraform apply $<

.PHONY: clean
clean:
	$(RM) $(TFPLAN)
